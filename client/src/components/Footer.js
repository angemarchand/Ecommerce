import React from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import instagram from '../assets/img/icons8-instagram.svg';
import twitter from '../assets/img/icons8-twitter.svg'
import facebook from '../assets/img/icons8-facebook.svg'


function Footer() {

    return (
        <div id="footer" className="container-fluid border mt-auto border-danger">
            <div className="row">
                <div className="col d-flex">
                    <img src={logo} alt="logo" className="footer-logo rounded" />
                    <div className="footer-text-logo">
                        <p className="adam" >OMEGA</p>
                        <p className="adam" >GAMING</p>
                    </div>
                </div>
            </div>
            {/* <div className="logo">
                <div className="image">
                    <div className="bg-logo">
                        <img src={logo} alt="logo" />
                    </div>
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
                <div className="footer-nav">
                    <Link to="/"> PRODUITS </Link>
                    <div>
                        <Link to="/"> zadazdaed </Link>
                        <Link to="/"> Pharetra in </Link>
                        <Link to="/"> Aliquam </Link>
                    </div>
                </div>
                <div className="footer-nav">
                    <Link to="/"> ACCESSOIRES </Link>
                    <div>
                        <Link to="/"> zadazdaed </Link>
                        <Link to="/"> Pharetra in </Link>
                        <Link to="/"> Aliquam </Link>
                    </div>
                </div>
                <div className="footer-nav">
                    <Link to="/"> PERIPHERIQUES </Link>
                    <div>
                        <Link to="/"> zadazdaed </Link>
                        <Link to="/"> Pharetra in </Link>
                        <Link to="/"> Aliquam </Link>
                    </div>
                </div>
                <div className="footer-nav">
                    <Link to="/"> ADMIN </Link>
                    <div>
                        <Link to="/"> zadazdaed </Link>
                        <Link to="/"> Pharetra in </Link>
                        <Link to="/"> Aliquam </Link>
                    </div>
                </div>

            </div> */}
        </div>
    )
}

export default Footer;