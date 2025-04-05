import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import styles from "./Layout.module.css";
import { FaShoppingCart, FaUser, FaSignOutAlt } from "react-icons/fa"; // Икони

const Layout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Примерна логика за изход
    localStorage.removeItem("user"); // Ако ползваш localStorage
    navigate("/login-signup"); // Пренасочване към login
  };

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link to="/" className={styles.logoLink}>LB Commerce</Link>
        </div>

        <nav className={styles.nav}>
          <Link to="/">Номер</Link>
          <Link to="/vin">VIN</Link>
          <Link to="/vehicle">Автомобил</Link>
          <Link to="/universal">Универсални</Link>
        </nav>

        <div className={styles.actions}>
          <Link to="/cart" className={styles.cartButton}>
            <FaShoppingCart className={styles.icon} /> Моята количка
          </Link>
          <Link to="/profile" className={styles.profileButton}>
            <FaUser className={styles.icon} /> Профил
          </Link>
          <button onClick={handleLogout} className={styles.logoutButton}>
            <FaSignOutAlt className={styles.icon} /> Изход
          </button>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

