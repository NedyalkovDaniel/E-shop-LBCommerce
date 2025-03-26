import React from "react";
import styles from "./VinSearch.module.css";

const VinSearch = () => {
  return (
    <div className={styles.vinPage}>
      <input type="text" placeholder="VIN" className={styles.vinInput} />
    </div>
  );
};

export default VinSearch;
