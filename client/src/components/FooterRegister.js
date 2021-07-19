import React from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import instagram from '../assets/img/icons8-instagram.svg';
import twitter from '../assets/img/icons8-twitter.svg'
import facebook from '../assets/img/icons8-facebook.svg'


function FooterRegister(){

    return (
        <div id="footer">
            <div className="logo">
                <div className="image">
                    <img src={logo} alt="logo" />
                    <h5> OMEGA GAMING</h5>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="social-icons">
                    <img src={instagram} alt="logo" />
                    <img src={twitter} alt="logo" />
                    <img src={facebook} alt="logo" />
                </div>
            </div>
            <div className="link">
                <ul>
                    <Link to="/"> Home </Link>
                    <Link to="/"> Login </Link>
                    <Link to="/"> Logout </Link>
                </ul>
            </div>
        </div>
    )
}

export default FooterRegister;