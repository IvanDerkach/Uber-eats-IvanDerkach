import React from 'react';
import {Link} from "react-router-dom";



export function ProductCard(props) {
  return (
    <li className="product-card">
      <Link to="/" className="product-card__link">
        <div className="product-card__left">
          <span className="product-card__title">{props.title}</span>
          <span className="product-card__consist">{props.consist}</span>
          <span className="product-card__price">{props.price}</span>
        </div>
      </Link>
    </li>
  );
}