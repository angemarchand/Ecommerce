import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { deleteToken } from "../services/authentication/User";
import CartPopover from "./cart/CartPopover";


function Navbar() {

    return (
        <nav id='navbar' className="navbar navbar-expand-lg navbar-light">
            <div className="container-xl">
                <Link to="/" className="navbar-brand logo">
                    <img id="nav-logo-img" src={logo} alt="logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" ></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/"> Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products"> Produits </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/users/register"> Register </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/users/login"> Login </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" onClick={deleteToken} to="#"> Logout </Link>
                        </li>
                    </ul>
                </div>
                <div className="d-none d-lg-block">
                    <CartPopover />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;