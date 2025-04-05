import { useParams } from "react-router-dom";
import productsData from "./data/products";
import "./CategoryPage.css"; // смени module.css с обикновен CSS за глобално ползване

const CategoryPage = () => {
  const { categorySlug } = useParams();

  if (!categorySlug) {
    return <p>Категорията не е намерена. Моля, проверете URL-а.</p>;
  }

  const filteredProducts = productsData.filter(
    (product) => product.category === categorySlug
  );

  const formattedCategorySlug = categorySlug
    ? categorySlug.replace("-", " ").toUpperCase()
    : "Категория не е намерена";

  return (
    <div className="categoryPage">
      <h1 className="title">{formattedCategorySlug}</h1>
      <div className="productList">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="productCard">
              <div className="productLeft">
                <img
                  src={product.image}
                  alt={product.name}
                  className="productImage"
                />
              </div>
              <div className="productInfo">
                <h3 className="productName">{product.name}</h3>
                <div className="productDetails">
                  <p><strong>Код:</strong> {product.code}</p>
                  <p><strong>Тип:</strong> {product.type}</p>
                  <p><strong>Марка:</strong> {product.brand}</p>
                  <p><strong>Опаковка:</strong> {product.package}</p>
                </div>
                <div className="productActions">
                  <button>Информация</button>
                </div>
              </div>
              <div className="productPriceBox">
                <p className="productPrice"><strong>{product.price.toFixed(2)} BGN</strong></p>
                <button className="buyButton">Купи</button>
              </div>
            </div>
          ))
        ) : (
          <p className="noProducts">
            Няма налични продукти в категория "{formattedCategorySlug}".
          </p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;





