import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export function ProductCard(props) {
  const {
    title,
    categories,
    imageUrl,
    price,
    itemDescription
  } = props.restaurant;
  let prices = price / 100;

  return (
    <li className="product-card">
      <Link to="/" className="product-card__link">
        <div className="product-card__left">
          {imageUrl !== undefined ? (
            <img src={imageUrl} alt="" className="product-card__img" />
          ) : null}
          <span className="product-card__title">{title}</span>
          {categories.map((category, i) => {
            return (
              <li className="store-card__category" key={i}>
                {category.keyName}
              </li>
            );
          })}
          {itemDescription !== undefined ? (
            <p className="product-card__consist">{itemDescription}</p>
          ) : null}
          <span className="product-card__price">{prices}</span>
        </div>
      </Link>
    </li>
  );
}
