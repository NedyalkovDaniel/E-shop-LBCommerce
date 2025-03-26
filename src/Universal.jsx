import React from "react";
import styles from "./Universal.module.css";

const Universal = () => {
  return (
    <div className={styles.UniversalPage}>
      <input type="text" placeholder="Универсални" className={styles.UniversalInput} />
    </div>
  );
};

export default Universal;