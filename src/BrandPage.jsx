import React from "react";
import { useParams } from "react-router-dom";
import productsData from "./data/products";
import styles from "./BrandPage.module.css";

const BrandPage = () => {
  const { brandSlug } = useParams();

  if (!brandSlug) {
    return <p>Марка не е открита. Проверете URL-а.</p>;
  }

  const formattedBrandName = brandSlug.replace("-", " ").toUpperCase();

  const filteredProducts = productsData.filter(
    (product) => product.brand.toLowerCase().replace(/\s+/g, "-") === brandSlug
  );

  return (
    <div className={styles.brandPage}>
      <h1 className={styles.title}>Модели от {formattedBrandName}</h1>

      <div className={styles.productGrid}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <img
                src={product.image}
                alt={product.name}
                className={styles.productImage}
              />
              <h2 className={styles.productName}>{product.name}</h2>
              <p className={styles.productPrice}>
                {product.price.toFixed(2)} BGN
              </p>
            </div>
          ))
        ) : (
          <p className={styles.noProducts}>
            Няма налични продукти за марката "{formattedBrandName}".
          </p>
        )}
      </div>
    </div>
  );
};

export default BrandPage;
