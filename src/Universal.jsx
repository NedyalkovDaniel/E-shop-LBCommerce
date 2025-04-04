import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Universal.module.css";


const parts = [
  { name: "Акумулатори", icon: "/battery.png" },
  { name: "Масла", icon: "/oil.png" },
  { name: "Антифризи", icon: "/antifreeze.png" },
  { name: "Течност за чистачки", icon: "screenwash.png" },
  { name: "Чистачки", icon: "/wipers.png" },
  { name: "Спирачна течност", icon: "/brakefluid.png" },
  { name: "Крушки", icon: "/bulbs.png" },
  { name: "Горивни маркучи", icon: "/fuellines.png" },
];

const Universal = () => {
  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate(`/category/${encodeURIComponent(category)}`);
  };

  return (
    <div className={styles.partsContainer}>
      {parts.map((part, index) => (
        <div key={index} className={styles.part} onClick={() => handleClick(part.name)}>
          <img src={part.icon} alt={part.name} className={styles.icon} />
          <p className={styles.partName}>{part.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Universal;

