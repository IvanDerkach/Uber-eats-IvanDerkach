import React from "react";
import "./PersonalCabinet.css";
import basket from "./img/basket.svg";

export function PersonalCabinet() {
  return (
    <div className="personal-cabinet">
      <button className="personal-cabinet__button">Sign In</button>
      <button className="personal-cabinet__button button--black">
        Register
      </button>
      <a
        className="personal-cabinet__basket"
        href="https://www.ubereats.com/ru-UA/checkout/"
      >
        <img src={basket} alt="basket" />
      </a>
    </div>
  );
}
