import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const addToCart = (product) => {
    try {
      console.log('Добавяме продукта в количката: ', product);

      const cart = JSON.parse(localStorage.getItem("cartItems")) || [];

      const existingProduct = cart.find((item) => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += 1;
        console.log('Продуктът вече съществува, увеличаваме количеството: ', existingProduct);
      } else {
        product.quantity = 1;
        cart.push(product);
        console.log('Продуктът не съществува, добавяме го в количката: ', product);
      }

      localStorage.setItem("cartItems", JSON.stringify(cart));
      alert(`${product.name} е добавен в количката!`);
    } catch (error) {
      console.error('Грешка при добавяне на продукт в количката: ', error);
    }
  };

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
          <button
            className={styles.buyButton}
            onClick={() => {
              console.log('Бутонът беше натиснат!');
              addToCart(product);
            }}
          >
            Купи
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;



