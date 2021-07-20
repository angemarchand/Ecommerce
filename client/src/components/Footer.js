import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

export default function Navbar() {
  return (
    <div id="footer">
      <div className="wrapper">
        <div className="footer-left">
          <div className="identity">
            <div className="bg-logo">
              <img src={logo}></img>
            </div>
            <div className="logo-text">
              <p className="omega">OMEGA </p>
              <p className="gaming">GAMING</p>
            </div>
          </div>
          <p className="lorem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="footer-right">
            <div className="link-list">
              <Link to="/products"> PRODUITS </Link>
                <a className="link">zadazdaed</a>
                <a className="link">Pharetra in.</a>
                <a className="link">Aliquam.</a>

            </div>
            <div className="link-list">
              <Link to="/users/register"> ACCESSOIRES </Link>
                <a className="link">zadazdaed</a>
                <a className="link">Pharetra in.</a>
                <a className="link">Aliquam.</a>

            </div>
            <div className="link-list">
              <Link to="/peripherique"> PERIPHERIQUES </Link>
                <a className="link">zadazdaed</a>
                <a className="link">Pharetra in.</a>
                <a className="link">Aliquam.</a>

            </div>
            <div className="link-list">
              <Link to="/admin"> ADMIN </Link>  
                <a className="link">zadazdaed</a>
                <a className="link">Pharetra in.</a>
                <a className="link">Aliquam.</a>

            </div>
            <div className="link-list">
              <Link to="/communaute"> COMMUNAUTÉ </Link>
                <a className="link">zadazdaed</a>
                <a className="link">Pharetra in.</a>
                <a className="link">Aliquam.</a>

            </div>
        </div>
      </div>
    </div>
  );
}
