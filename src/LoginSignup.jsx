import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = "http://localhost:5000/users";
    
    if (action === "Login") {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not ok");
        const users = await response.json();
        const user = users.find(user => user.email === email && user.password === password);
        
        if (user) {
          console.log("Login successful", user);
          navigate("/App");
        } else {
          setError("Невалиден имейл или парола!");
        }
      } catch (error) {
        console.error("Error logging in:", error);
        setError("Грешка при влизане. Моля, опитайте отново.");
      }
    } else {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, email, password })
        });
        
        if (!response.ok) throw new Error("Error registering user");
        const data = await response.json();
        console.log("User registered successfully", data);
        
        setUsername("");
        setEmail("");
        setPassword("");
        setAction("Login");
      } catch (error) {
        console.error("Error registering user:", error);
        setError("Грешка при регистрацията. Моля, опитайте отново.");
      }
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <form onSubmit={handleSubmit} className="inputs">
        {action === "Sign Up" && (
          <div className="input">
            <img src="/user_icon.png" alt="" />
            <input
              type="text"
              placeholder="User"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        )}
        <div className="input">
          <img src="/email_icon.png" alt="" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input">
          <img src="/password_icon.png" alt="" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {action === "Login" && (
          <div className="forgot-password">
            Забравена парола? <span>Натисни тук!</span>
          </div>
        )}
        
        {error && <div className="error-message">{error}</div>}
        
        <div className="submit-container">
          {action === "Login" ? (
            <>
              <button
                type="button"
                className="submit"
                onClick={() => setAction("Sign Up")}
              >
                Регистрирай се
              </button>
              <button type="submit" className="submit">
                Вход
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className="submit"
                onClick={() => setAction("Login")}
              >
                Върни се в логин
              </button>
              <button type="submit" className="submit">
                Регистрация
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginSignup;



