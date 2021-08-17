import React from "react";
import { ChevronLeft } from "@material-ui/icons";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


function SectionHome(){

    return (
        <div id="homeSection" className="container-fluid ">
        <div className="row ms-5 mt-3 p-5">
                <div className="col my-auto d-none d-lg-block position-relative">
                    <div id="left-row-banner" className="row position-absolute">
                        <div className="col-7 d-flex align-items-center">
                            <div className="border-white small-picture-background m-2">
                                <img className="small-picture-left-banner" src="#" alt="" />
                                <h4>Nom du produit </h4>
                                <p> Prix </p>
                            </div>
                            <div className="border-white small-picture-background m-2">
                                <img className="small-picture-left-banner" src="#" alt="" />
                                <h4>Nom du produit </h4>
                                <p> Prix </p>
                            </div>
                        </div>
                        <div className="col-7 d-flex ">
                            <div className="border-white small-picture-background m-2">
                                <img className="small-picture-left-banner" src="#" alt="" />
                                <h4>Nom du produit </h4>
                                <p> Prix </p>
                            </div>
                            <div className="border-white small-picture-background m-2">
                                <img className="small-picture-left-banner" src="#" alt="" />
                                <h4>Nom du produit </h4>
                                <p> Prix </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="large-pic-right-banner" className="col me-5 d-flex">
                    <img src="#" alt="" id="large-picture-right-banner" />
                </div>
            </div>
        </div>
    )
}

export default SectionHome;

