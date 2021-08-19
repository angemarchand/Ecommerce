import React from "react";
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
                        <div id="container-logo" className="d-flex justify-content-center align-items-center rounded">
                                <img src={logo} alt="logo" className="footer-logo rounded" />
                            </div>
                            <div className="footer-text-logo">
                                <p id="logo-omega" className="mt-2 mb-0" >OMEGA</p>
                                <p id="logo-gaming" >GAMING</p>
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