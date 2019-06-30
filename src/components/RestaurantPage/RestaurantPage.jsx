import React from 'react';
import {Link} from "react-router-dom";
import './RestaurantPresentation/RestaurantPresentation.css';
import './RestaurantMenu/RestaurantMenu.css';
import './RestaurantPage.css';
import './ProductCard/ProductCard.css';
import appetizer1 from './img/appetizer_1.png';
import {ProductUnit} from "./ProductCard/ProductUnit.jsx";
import {RestaurantMenu} from "./RestaurantMenu/RestaurantMenu.jsx";
import {RestaurantPresentation} from "./RestaurantPresentation/RestaurantPresentation.jsx";

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
      <RestaurantPresentation/>
      <RestaurantMenu/>

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
