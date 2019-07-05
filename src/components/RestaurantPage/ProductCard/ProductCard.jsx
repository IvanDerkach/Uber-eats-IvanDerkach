import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { restaurant } from "../restaurantMenuInfo";

export function ProductCard(props) {
  let productImage = restaurant.items[props.id].imageUrl;
  return (
    <li className="product-card">
      <Link to="/" className="product-card__link">
        <div className="product-card__left">
          <span className="product-card__title">
            {restaurant.items[props.id].title}
          </span>

          <span className="product-card__consist">
            {restaurant.items[props.id].itemDescription}
          </span>

          <span className="product-card__price">
            {restaurant.items[props.id].price / 100} ₴
          </span>
        </div>
        {productImage && (
          <img
            className="product-card__image"
            src={restaurant.items[props.id].imageUrl}
            alt="product"
          />
        )}
      </Link>
    </li>
  );
}
