import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";


function Navbar() {

    return (
        <div id="navbar">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <div>
                <ul>
                    <Link to="/"> Home </Link>
                    <Link to="/products"> Produits </Link>
                    <Link to="/users/register"> Register </Link>
                    <Link to="/user/login"> Login </Link>
                    <Link to="/"> Logout </Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;