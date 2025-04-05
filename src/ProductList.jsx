// ProductList.js
import React from 'react';
import ProductCard from './ProductCard'; // Импортирай компонента ProductCard
import { products } from '../data/products'; // Импортирай масива с продукти

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} /> // Рендирай всеки продукт чрез ProductCard
      ))}
    </div>
  );
};

export default ProductList;
