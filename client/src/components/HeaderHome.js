import React from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import logo from "../assets/img/logo.png";
import CarouselProducts from "./CarouselProducts";


function HeaderHome() {

    return(
        <div>
            <div className="container">
                <div className="row align-items-center">
                    <CarouselProducts />
                    <div className="col-12 logoArea">
                        <div className="d-flex align-items-center">
                            <div id="logo" className="col-2 d-flex justify-content-center align-items-center rounded">
                                <img src={logo} alt="logo" className="footer-logo rounded" />
                            </div>
                            <div className="col-3 footer-text-logo">
                                <p id="logoOmega" className="mt-2 mb-0" >OMEGA</p>
                                <p id="logoGaming" >GAMING</p>
                            </div>
                            <div className="col-7 line">
                                <h3>La marque</h3>
                                <p>Omega Gaming est une société française spécialisée dans la distribution de produits de jeux vidéo et du matériel électronique.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default HeaderHome;