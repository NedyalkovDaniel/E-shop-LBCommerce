import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.imageSection}>
        <img src={product.image} alt={product.name} className={styles.productImage} />
      </div>

      <div className={styles.detailsSection}>
        <h3 className={styles.productTitle}>{product.name}</h3>
        <p><strong>Код:</strong> {product.code}</p>
        <p><strong>Тип:</strong> {product.type}</p>
        <p><strong>Търговска марка:</strong> {product.brand}</p>
        <p><strong>Опаковка:</strong> {product.package}</p>

        <div className={styles.buttons}>
          <button className={styles.infoButton}>ИНФОРМАЦИЯ</button>
          <button className={styles.replaceButton}>ЗАМЯНА</button>
          <button className={styles.oeButton}>OE НОМЕРА</button>
          <button className={styles.applicationsButton}>ПРИЛОЖЕНИЯ</button>
        </div>
      </div>

      <div className={styles.priceSection}>
        <img src={product.brandLogo} alt={product.brand} className={styles.brandLogo} />
        <p className={styles.price}><strong>{product.price} BGN</strong></p>
        <p className={styles.priceWithTax}>{product.priceWithTax} BGN (с ДДС)</p>
        <button className={styles.buyButton}>КУПИ</button>
      </div>
    </div>
  );
};

export default ProductCard;
