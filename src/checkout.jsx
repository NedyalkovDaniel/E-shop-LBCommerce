import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Checkout.module.css';

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    deliveryMethod: 'address',
    paymentMethod: 'cash',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCart);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!customerInfo.name) newErrors.name = 'Името е задължително.';
    if (!customerInfo.phone) newErrors.phone = 'Телефонът е задължителен.';
    if (!customerInfo.email) newErrors.email = 'Имейлът е задължителен.';
    if (!customerInfo.address) newErrors.address = 'Адресът е задължителен.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    alert(`Поръчката е приета успешно!\nДоставка: ${customerInfo.deliveryMethod === 'address' ? 'До адрес' : 'До офис'}\nПлащане: ${customerInfo.paymentMethod === 'cash' ? 'Наложен платеж' : 'Карта'}`);
    localStorage.removeItem('cartItems');
    navigate('/');
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className={styles.checkoutPage}>
      <h2>Завършване на поръчка</h2>

      {cartItems.length === 0 ? (
        <p>Количката е празна.</p>
      ) : (
        <>
          <div className={styles.orderSummary}>
            <h3>Вашите продукти:</h3>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.item}>
                <span>{item.name} x {item.quantity || 1}</span>
                <span>{(item.price * (item.quantity || 1)).toFixed(2)} лв.</span>
              </div>
            ))}
            <div className={styles.total}>
              <strong>Общо:</strong> {total.toFixed(2)} лв.
            </div>
          </div>

          <form className={styles.checkoutForm} onSubmit={handleSubmit}>
            <h3>Данни за клиента</h3>

            <label>
              Име:
              <input type="text" name="name" value={customerInfo.name} onChange={handleChange} />
              {errors.name && <span className={styles.error}>{errors.name}</span>}
            </label>

            <label>
              Телефон:
              <input type="text" name="phone" value={customerInfo.phone} onChange={handleChange} />
              {errors.phone && <span className={styles.error}>{errors.phone}</span>}
            </label>

            <label>
              Имейл:
              <input type="email" name="email" value={customerInfo.email} onChange={handleChange} />
              {errors.email && <span className={styles.error}>{errors.email}</span>}
            </label>

            <label>
              Адрес:
              <textarea name="address" value={customerInfo.address} onChange={handleChange} />
              {errors.address && <span className={styles.error}>{errors.address}</span>}
            </label>

            <label>
              Метод на доставка:
              <select name="deliveryMethod" value={customerInfo.deliveryMethod} onChange={handleChange}>
                <option value="address">До адрес</option>
                <option value="office">До офис на куриер</option>
              </select>
            </label>

            <label>
              Метод на плащане:
              <select name="paymentMethod" value={customerInfo.paymentMethod} onChange={handleChange}>
                <option value="cash">Наложен платеж</option>
                <option value="card">Плащане с карта</option>
              </select>
            </label>

            <button type="submit" className={styles.submitButton}>
              Завърши поръчката
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Checkout;
