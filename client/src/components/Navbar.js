import React from "react";
import logo from "../assets/img/logo.png";
import cart from "../assets/img/shopping_cart_black_24dp.svg";
import search from "../assets/img/search_black_24dp.svg";
import profile from "../assets/img/account_circle_black_24dp.svg";

export default function Navbar() {
  return (
    <div id="navbar">
      <div className="wrapper">
        <img src={logo} className="logo"></img>
        <div className="navLinks">
          <a href="#">PORTABLE</a>
          <a href="#">ACCESSOIRES</a>
          <a href="#">PERIPHERIQUES</a>
          <a href="#">CUSTOM</a>
          <a href="#">COMMUNAUTÉ</a>
        </div>
        <div className="navIcons">
          <img src={search}></img>
          <img src={cart}></img>
          <img src={profile}></img>
        </div>
      </div>
    </div>
  );
}
