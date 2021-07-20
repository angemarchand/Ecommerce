import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import cart from "../assets/img/shopping_cart_black_24dp.svg";
import search from "../assets/img/search_black_24dp.svg";
import profile from "../assets/img/account_circle_black_24dp.svg";


export default function Navbar() {
    return (
        <div id="nav">
            <div className ="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="navigation">
              <ul>
                <Link to="/"> HOME </Link>
                <Link to="/products"> PRODUITS </Link>
                <Link to="/users/register"> ACCESSOIRES </Link>
                <Link to="/peripherique"> PERIPHERIQUES </Link>
                <Link to="/admin"> ADMIN </Link>
                <Link to="/communaute"> COMMUNAUTÉ </Link>
                <Link to="/search"><img  src={search} alt="search icon"/></Link>
                <Link to="/search"><img src={cart} alt="cart icon"/></Link>
                <Link to="/profile"><img src={profile} alt="profile icon"/></Link>
                
              </ul>
              <ul className="navIcons">

              </ul>
            </div>

        </div>
    )
}
