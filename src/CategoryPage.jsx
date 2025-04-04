import { useParams } from "react-router-dom";
import productsData from "./data/products"; // Проверете дали пътят е верен!
import "./CategoryPage.module.css"; // Добавяне на стилове

const CategoryPage = () => {
  const { categorySlug } = useParams(); // Взимаме slug от URL

  // Проверка дали categorySlug е валиден
  if (!categorySlug) {
    return <p>Категорията не е намерена. Моля, проверете URL-а.</p>;
  }

  // Филтриране на продуктите според slug-а
  const filteredProducts = productsData.filter(
    (product) => product.category === categorySlug
  );

  // Защита от undefined или празен slug
  const formattedCategorySlug = categorySlug
    ? categorySlug.replace("-", " ").toUpperCase()
    : "Категория не е намерена"; // Задаваме fallback текст, ако slug е undefined

  return (
    <div className="categoryPage">
      <h1 className="title">{formattedCategorySlug}</h1>
      <div className="productList">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="productCard">
              <img
                src={product.image}
                alt={product.name}
                className="productImage"
              />
              <h2 className="productName">{product.name}</h2>
              <p className="productPrice">{product.price.toFixed(2)} BGN</p>
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




