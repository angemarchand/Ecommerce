import React from "react";
import logo from "../assets/img/logo.png";
import { Instagram, Facebook, Twitter } from '@material-ui/icons';
import { Link } from "react-router-dom";

function Footer() {

    return (
        <div id="footer" className="container-fluid p-3 mt-auto">
            <div className="container m-0 mx-auto">
                <div className="row align-items-center justify-content-around">
                    <div className="col-md-6 mb-4">
                        <div className="d-flex align-items-center">
                            <div id="container-logo" className="d-flex justify-content-center align-items-center rounded">
                                <img src={logo} alt="logo" className="footer-logo rounded" />
                            </div>
                            <div className="footer-text-logo">
                                <p id="logo-omega" className="mt-2 mb-0" >OMEGA</p>
                                <p id="logo-gaming" >GAMING</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget.
                        </div>
                    </div>
                    <div className="col-6 d-none d-md-block text-center">
                        <Instagram className="footer-social-icons" />
                        <Facebook className="footer-social-icons" />
                        <Twitter className="footer-social-icons" />
                    </div>
                </div>

                <div className="row align-items-center justify-content-centr">
                    <div className="col d-none d-sm-block">
                        <Link to={"/"}>
                            <h3>Home</h3>
                        </Link>
                        <p>Pharetra in.</p>
                        <p>Aliquam.</p>
                        <p>Nec non.</p>
                        <p>Ipsum.</p>
                        <p>Amet.</p>
                    </div>
                    <div className="col">
                        <Link to={"/products"}>
                            <h3>Produits</h3>
                        </Link>
                        <p>Nec non.</p>
                        <p>Ipsum.</p>
                        <p>Aliquam.</p>
                        <p>zadazdaed</p>
                        <p>Amet.</p>
                    </div>
                    <div className="col">
                        <h3>Carriere</h3>
                        <p>Pharetra in.</p>
                        <p>Aliquam.</p>
                        <p>Nec non.</p>
                        <p>Ipsum.</p>
                        <p>Amet.</p>
                    </div>
                    <div className="col">
                        <h3>A propos</h3>
                        <p>Nec non.</p>
                        <p>Ipsum.</p>
                        <p>Aliquam.</p>
                        <p>zadazdaed</p>
                        <p>Amet.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;