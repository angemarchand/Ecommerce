import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";


function HeaderRegister() {

    return (
        <div id="navbar">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <div>
                <ul>
                    <Link to="/"> Home </Link>
                    <Link to="/products"> PRODUITS </Link>
                    <Link to="/"> Login </Link>
                    <Link to="/"> Logout </Link>
                </ul>
            </div>
        </div>
    )
}

export default HeaderRegister;