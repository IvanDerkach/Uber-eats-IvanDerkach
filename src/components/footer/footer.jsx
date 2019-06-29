import React from 'react';
import './footer.css';
import footerLogo from './img/uber_eats_logo__white.svg'

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <img className="footer__logo" src={footerLogo} alt="logo"/>
            </div>
        </footer>
    );
}