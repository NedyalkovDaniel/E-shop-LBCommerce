import React, { useState, useEffect } from "react";
import styles from "./ProfilePage.module.css";

const ProfilePage = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [shippingData, setShippingData] = useState(user.shippingAddress || { name: "", phone: "", city: "", address: "" });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleShippingSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/users/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...user,
          shippingAddress: shippingData,
        }),
      });

      if (!response.ok) {
        throw new Error("Неуспешно обновяване на данни за доставка.");
      }

      const updatedUser = await response.json();
      localStorage.setItem("user", JSON.stringify(updatedUser));

      setUser(updatedUser);
      setSuccessMessage("Данните за доставка бяха актуализирани успешно.");
      setError("");
    } catch (error) {
      setError("Грешка при обновяване на данни за доставка. Моля, опитайте отново.");
      setSuccessMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      setError("Новата парола не съвпада с потвърдената.");
      return;
    }

    if (formData.oldPassword !== user.password) {
      setError("Старата парола е невалидна.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/users/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...user,
          password: formData.newPassword,
        }),
      });

      if (!response.ok) {
        throw new Error("Неуспешна промяна на паролата.");
      }

      const updatedUser = await response.json();
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setUser(updatedUser);
      setSuccessMessage("Паролата беше променена успешно.");
      setError("");
    } catch (error) {
      setError("Грешка при промяна на паролата. Моля, опитайте отново.");
      setSuccessMessage("");
    }
  };

  return (
    <div className={styles.profilePage}>
      <h1>Вашият Профил</h1>
      <h2>Лични Данни</h2>
      <div className={styles.userInfo}>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
      <form onSubmit={handleShippingSubmit} className={styles.form}>
        <h2>Данни за доставка</h2>
        <input
          type="text"
          name="name"
          value={shippingData.name}
          onChange={handleShippingChange}
          required
          placeholder="Име:"
        />
        <input
          type="text"
          name="phone"
          value={shippingData.phone}
          onChange={handleShippingChange}
          required
          placeholder="Телефон:"
        />
        <input
          type="text"
          name="city"
          value={shippingData.city}
          onChange={handleShippingChange}
          required
          placeholder="Град:"
        />
        <input
          type="text"
          name="address"
          value={shippingData.address}
          onChange={handleShippingChange}
          required
          placeholder="Адрес:"
        />
        <button type="submit" className={styles.submitButton}>
          Запази данни за доставка
        </button>
      </form>

      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Промяна на парола</h2>
        {error && <div className={styles.errorMessage}>{error}</div>}
        {successMessage && <div className={styles.successMessage}>{successMessage}</div>}

        <input
          type="password"
          name="oldPassword"
          value={formData.oldPassword}
          onChange={handleChange}
          required
          placeholder="Стара парола:"
        />
        <input
          type="password"
          name="newPassword"
          value={formData.newPassword}
          onChange={handleChange}
          required
          placeholder="Нова парола:"
        />
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          placeholder="Потвърдете новата парола:"
        />
        <button type="submit" className={styles.submitButton}>
          Промени паролата
        </button>
      </form>

      
    </div>
  );
};

export default ProfilePage;



