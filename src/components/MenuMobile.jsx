import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import AppContext from "@context/AppContext";
import "@styles/MenuMobile.scss";

const MenuMobile = () => {
    const { setMenuMobile, toggleMenu } = useContext(AppContext)

  return (

    <nav className="mobile-menu">

            <ul>
                <li className="title-menu-mobile">
                    <Link to="/#" className="title-menu">CATEGORIES</Link>
                </li>
                <li>
                    <Link to="/#" onClick={() => setMenuMobile(!toggleMenu)}>All</Link>
                </li>
                <li>
                    <Link to="/#" onClick={() => setMenuMobile(!toggleMenu)}>Cameras</Link>
                </li>
                <li>
                    <Link to="/#" onClick={() => setMenuMobile(!toggleMenu)}>Sistems</Link>
                </li>
                <li>
                    <Link to="/#" onClick={() => setMenuMobile(!toggleMenu)}>Alarmas</Link>
                </li>
                <li>
                    <Link to="/#" onClick={() => setMenuMobile(!toggleMenu)}>Electronics</Link>
                </li>
                <li>
                    <a href="/" onClick={() => setMenuMobile(!toggleMenu)}>Others</a>
                </li>
            </ul>

            <ul>
                <li>
                    <Link to="/orders">My orders</Link>
                </li>
                <li >
                    <Link to="/account" onClick={() => setMenuMobile(!toggleMenu)}>My account</Link>
                </li>
            </ul>

            <ul>
                <li>
                    <Link to="/#" className="email" onClick={() => setMenuMobile(!toggleMenu)}>izaack107@gmail.com</Link>
                </li>
                <li>
                    <Link to="/login" className="sing-out" onClick={() => setMenuMobile(!toggleMenu)}>Sing out</Link>
                </li>
            </ul>

        </nav>
    );
}

export default MenuMobile;