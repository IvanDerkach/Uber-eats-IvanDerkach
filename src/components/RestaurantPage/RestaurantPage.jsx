import React from 'react';
import {Link} from "react-router-dom";
import './restaurant.css';
import './restaurant-menu.css';
import './RestaurantPage.css';
import './ProductCard.css';
import appetizer1 from './img/appetizer_1.png';
import {ProductUnit} from "./ProductUnit.jsx";

export function RestaurantPage() {
  const productUnits = [
    {
      title: 'Сельдь на бородинском хлебе',
      consist: 'С яйцом и огурцом',
      price: '99 ₴₴'
    },
    {
      title: 'Сельдь на бородинском хлебе',
      consist: 'С яйцом и огурцом',
      price: '99 ₴₴'
    },
    {
      title: 'Сельдь на бородинском хлебе',
      consist: 'С яйцом и огурцом',
      price: '99 ₴₴'
    },
  ];
  return (
    <>
      <div className="restaurant-card__background">
        <div className="restaurant-card__wrapper">
          <div className="restaurant-card">
            <span className="restaurant-card__title">Трактир «Пушкин»</span>
            <div className="restaurant-card__footer">
              <span className="restaurant-card__price">₴₴₴ • Европейская</span>
              <span className="restaurant-card__time">40 - 50 Min</span>
            </div>
          </div>
        </div>
      </div>

      <nav className="restaurant-menu">
        <ul className="nav__menu">
          <li>
            <Link to="/" className="nav__menu__item"> Закуски </Link>
          </li>
          <li>
            <Link to="/" className="nav__menu__item"> Салаты </Link>
          </li>
          <li>
            <Link to="/" className="nav__menu__item"> Супы </Link>
          </li>
          <li>
            <Link to="/" className="nav__menu__item"> Горячие блюда </Link>
          </li>
          <li>
            <Link to="/" className="nav__menu__item"> Гарниры </Link>
          </li>
          <li>
            <Link to="/" className="nav__menu__item"> Десерты </Link>
          </li>
        </ul>
      </nav>

      <div className="restaurantPage__wrapper">
        <div className="restaurantPage">
          <span className="restaurantPage__title">Закуски</span>
          <ul className="restaurantPage__list">
            {productUnits.map((productUnit, i) => {
              return (
                <li className="menu-card" key={i}>
                  <Link to="/" className="menu-link">
                    <div className="menu-card__left">
                      <ProductUnit
                        productUnit={productUnit}
                        title={productUnit.title}
                        consist={productUnit.consist}
                        price={productUnit.price}
                      />
                    </div>
                    <img src={appetizer1} alt=""/>
                  </Link>
                </li>
              )
            })
            }

          </ul>
        </div>
      </div>
    </>
  );
}
