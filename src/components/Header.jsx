import React from 'react';
import "../styles/header.scss"

const Header = () => {
    return (
      <header>
        <nav>
          <img
            src="./Platzi_YardSale_Icons/icon_menu.svg"
            alt="icono de menu"
            className="menu"
          />

          <figure className="navbar-left">
            <img
              src="./Platzi_YardSale_Logos/logo_yard_sale.svg"
              alt="Logo"
              className="logo"
            />
            <ul>
              <li>
                <a href="/">All</a>
              </li>
              <li>
                <a href="/">Cameras</a>
              </li>
              <li>
                <a href="/">Electronics</a>
              </li>
              <li>
                <a href="/">Alarmas</a>
              </li>
              <li>
                <a href="/">Others</a>
              </li>
            </ul>
          </figure>

          <figure className="navbar-right">
            <ul>
              <li className="navbar-email">izaack107@gmail.com</li>
              <li className="navbar-shopping-cart">
                <img
                  src="./Platzi_YardSale_Icons/icon_shopping_cart.svg"
                  alt="shopping cart"
                />
                <div>2</div>
              </li>
            </ul>
          </figure>
        </nav>
      </header>
    );
}

export default Header;