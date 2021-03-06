import React from "react";
import "./RestaurantMenu.css";
import { Link } from "react-router-dom";

export function RestaurantMenu() {
  return (
    <nav className="restaurant-menu">
      <ul className="nav__menu">
        <li>
          <Link to="/" className="nav__menu__item">
            {" "}
            Закуски{" "}
          </Link>
        </li>
        <li>
          <Link to="/" className="nav__menu__item">
            {" "}
            Салаты{" "}
          </Link>
        </li>
        <li>
          <Link to="/" className="nav__menu__item">
            {" "}
            Супы{" "}
          </Link>
        </li>
        <li>
          <Link to="/" className="nav__menu__item">
            {" "}
            Горячие блюда{" "}
          </Link>
        </li>
        <li>
          <Link to="/" className="nav__menu__item">
            {" "}
            Гарниры{" "}
          </Link>
        </li>
        <li>
          <Link to="/" className="nav__menu__item">
            {" "}
            Десерты{" "}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
