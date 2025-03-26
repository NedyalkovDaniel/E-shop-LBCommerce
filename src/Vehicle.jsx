import React from "react";
import styles from "./Vehicle.module.css";

const VehicleSearch = () => {
  return (
    <div className={styles.vehiclePage}>
      <input type="text" placeholder="Автомобил" className={styles.vehicleInput} />
    </div>
  );
};

export default VehicleSearch;