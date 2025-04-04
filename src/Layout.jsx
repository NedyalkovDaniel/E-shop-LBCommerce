import React from "react";
import { Outlet, Link } from "react-router-dom";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div>

      <header className={styles.header}>
        <div className={styles.logo}>LB Commerce</div>
        <nav className={styles.nav}>
          <Link to="/">Номер</Link>
          <Link to="/vin">VIN</Link>
          <Link to="/vehicle">Автомобил</Link>
          <Link to="/universal">Универсални</Link>
          <Link to="/products">Продукти</Link>
        </nav>
        <button className={styles.cartButton}>Моята количка</button>
      </header>


      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
