import React from "react";
import styles from "./Homes.module.css";

const Homes = () => {
  return (
    <div className={styles.homepage}>

      <div className={styles.searchBar}>
        <input type="text" placeholder="Номер" />
      </div>

      <div className={styles.banner}>
        <img src="/banner.png" alt="Banner" />
      </div>


      <div className={styles.promotions}>
        <div className={styles.promoCard}>
          <img src="/promo1.jpg" alt="Promo 1" />
          <h3>Отстъпки до 40%</h3>
        </div>
        <div className={styles.promoCard}>
          <img src="/promo2.jpg" alt="Promo 2" />
          <h3>Авточасти за всеки автомобил</h3>
        </div>
        <div className={styles.promoCard}>
          <img src="/promo3.png" alt="Promo 3" />
          <h3>Еко цена за върнат акумулатор 15 лева отстъпка от цената</h3>
        </div>
      </div>
    </div>
  );
};

export default Homes;


