import React from 'react';
import { Link } from 'react-router-dom';  // Импортираме Link за маршрутизация

function Header() {
  return (
    <header>
    <section className="titles">
      <h1 className="title">LB Commerce</h1>
      <h3 className="sub-title">Магазин за авточасти</h3>
    </section>
    <nav>
      <ul>
        {/* Използваме Link вместо <a> за навигация без презареждане на страницата */}
        <li>
          <Link to="/Home">Начало</Link> {/* Навигация към началната страница */}
        </li>
        <li>
          <Link to="/aboutus">За Нас</Link> {/* Навигация към страницата "За нас" */}
        </li>
        <li>
          <Link to="/products">Продукти</Link> {/* Навигация към страницата "Продукти" */}
        </li>
        <li>
          <Link to="/contacts">Контакти</Link> {/* Навигация към страницата "Контакти" */}
        </li>
      </ul>
    </nav>
  </header>
  );
}

export default Header;