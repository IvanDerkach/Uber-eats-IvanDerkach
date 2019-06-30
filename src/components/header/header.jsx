import React from 'react';
import './header.css';
import '../Button/button.css';
import logo from './img/uber_eats_logo.svg';
import basket from './img/basket.svg';



export function Header() {
    return (
        <div className="header">
            <div className="header__wrapper">
                <a className="uber_link" href="https://www.ubereats.com/ru-UA/stores/">
                    <img src={logo} alt="" className="logo header__logo"/>
                </a>

                <div className="delivery-info">
                    <label>
                        <input className="header__input left_input" type="text" placeholder="ASAP"/>
                    </label>
                    <span className="header__span">to</span>
                    <label className="header__label">
                        <input className="header__input right_input" type="text" placeholder="ul. Tarasivska St, 16"/>
                    </label>
                </div>

                <div className="user_opportunities">
                    <button className="button">Sign In</button>
                    <button className="button button--black">Register</button>
                    <a className="basket" href="https://www.ubereats.com/ru-UA/checkout/">
                        <img src={basket} alt="basket"/>
                    </a>
                </div>
            </div>
        </div>
);
}
