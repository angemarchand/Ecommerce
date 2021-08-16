import React from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import logo from "../assets/img/logo.png";
import CarouselProducts from "./CarouselProducts";


function HeaderHome(){

    return(
        <div>
            <div class="container">
                <div class="row align-items-center">
                    {/* <div class="col-12">
                        <div class="card  align-items-center rounded-0">
                            <div class="iconLeft">
                                <ArrowBackIosIcon fontSize="large"></ArrowBackIosIcon>
                            </div>
                            <div class="iconRight">
                                <ArrowForwardIosIcon fontSize="large"></ArrowForwardIosIcon>
                            </div>
                        
                            <h1> OMEGA PRO 14</h1>
                            <p>EVERYTHING YOU NEED, AT FINGERTIPS</p>
                            <img src="#" />
                           
                        </div>
                            
                    </div> */}
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
                                <p>Omega Gaming est une société française spécialisée dans la distribution de produits de jeux vidéo et dub matériel électronique.</p>
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default HeaderHome;