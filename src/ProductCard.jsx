import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.imageSection}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.productImage}
          onError={(e) => {
            e.target.src = "/fallback.png";
          }}
        />
      </div>

      <div className={styles.detailsSection}>
        <h3 className={styles.productTitle}>{product.name}</h3>
        <p><strong>Код:</strong> {product.code || "–"}</p>
        <p><strong>Тип:</strong> {product.type || "–"}</p>
        <p><strong>Търговска марка:</strong> {product.brand || "–"}</p>
        <p><strong>Опаковка:</strong> {product.package || "–"}</p>
      </div>

      <div className={styles.priceSection}>
        <p className={styles.price}><strong>{product.price} BGN</strong></p>
        {product.price && (
          <p className={styles.priceWithTax}>
            {(product.price * 1.2).toFixed(2)} BGN (с ДДС)
          </p>
        )}

        <div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductCard;



