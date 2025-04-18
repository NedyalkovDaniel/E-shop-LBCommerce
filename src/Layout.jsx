import React, { useState, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import styles from "./Layout.module.css";
import { FaShoppingCart, FaUser, FaSignOutAlt } from "react-icons/fa";

const Layout = () => {
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const updateCartInfo = () => {
      const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];

      const totalItems = storedCart.reduce(
        (sum, item) => sum + (item.quantity || 1),
        0
      );

      const totalPrice = storedCart.reduce(
        (sum, item) => sum + (item.price * (item.quantity || 1)),
        0
      );

      setCartCount(totalItems);
      setCartTotal(totalPrice.toFixed(2));
    };

    updateCartInfo();

    window.addEventListener("storage", updateCartInfo);
    const interval = setInterval(updateCartInfo, 500);

    return () => {
      window.removeEventListener("storage", updateCartInfo);
      clearInterval(interval);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login-signup");
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
            <div className={styles.cartIconWrapper}>
              <FaShoppingCart className={styles.icon} />
              {cartCount > 0 && (
                <span className={styles.cartCount}>{cartCount}</span>
              )}
            </div>
            <div className={styles.cartInfoText}>
              <span>Моята количка</span>
              <span className={styles.cartTotal}>{cartTotal} лв.</span>
            </div>
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


