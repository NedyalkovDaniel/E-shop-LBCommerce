import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CartPage.module.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  // Зареждаме продуктите в количката от localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCart);
  }, []);

  // Обновяване на количката в localStorage
  const updateLocalStorage = (updatedCart) => {
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  // Изтриване на продукт от количката
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    updateLocalStorage(updatedCart);
  };

  // Изчистване на количката
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems');
  };

  const changeQuantity = (productId, delta) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === productId) {
        const newQuantity = item.quantity + delta;
        return { ...item, quantity: newQuantity > 1 ? newQuantity : 1 };
      }
      return item;
    });
    updateLocalStorage(updatedCart);
  };
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const proceedToCheckout = () => {
    if (cartItems.length > 0) {
      navigate('/checkout');
    } else {
      alert('Количката е празна!');
    }
  };

  return (
    <div className={styles.cartPage}>
      <div className={styles.cartContainer}>
        <h2>Моята количка</h2>
        <p><strong>Общо продукти:</strong> {totalItems}</p>
        <p><strong>Обща сума:</strong> {totalPrice.toFixed(2)} лв.</p>

        {cartItems.length === 0 ? (
          <p>Количката е празна. Моля, добавете продукти!</p>
        ) : (
          <div className={styles.cartItems}>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <img src={item.image} alt={item.name} className={styles.cartItemImage} />
                <div className={styles.cartItemDetails}>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p><strong>Цена: </strong>{item.price.toFixed(2)} лв.</p>
                  <div className={styles.quantityControls}>
                    <button onClick={() => changeQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => changeQuantity(item.id, 1)}>+</button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className={styles.removeButton}>
                    Премахни
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className={styles.cartActions}>
          <button onClick={clearCart} className={styles.clearButton}>
            Изчисти количката
          </button>
          <button onClick={proceedToCheckout} className={styles.checkoutButton}>
            Продължи към поръчка
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
