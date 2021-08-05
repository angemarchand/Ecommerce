import React from "react";
import { ChevronLeft } from "@material-ui/icons";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


function SectionHome(){

    return (
        <div id="homeSection" className="container-fluid">
            <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="d-flex">
                        <div className="iconLeft">
                            <ArrowBackIosIcon fontSize="large"></ArrowBackIosIcon>
                        </div>
                        <div className="manyPics">
                            <div className="d-flex leftPics">
                                <div className="card-title newDiv">
                                    <img src="#" alt="" />
                                    <h4> Le produit </h4>
                                    <p> Description de l'article</p>
                                    <p> 20$</p>
                                </div>
                                <div className="card-title newDiv">
                                    <img src="#" alt="" />
                                    <h4> Le produit </h4>
                                    <p> Description de l'article</p>
                                    <p> 20$</p>
                                </div>
                            </div>
                            <div className=" d-flex rightPics">
                                <div className="card-title newDiv">
                                    <img src="#" alt="" />
                                    <h4> Le produit </h4>
                                    <p> Description de l'article</p>
                                    <p> 20$</p>
                                </div>
                                <div className="card-title newDiv">
                                    <img src="#" alt="" />
                                    <h4> Le produit </h4>
                                    <p> Description de l'article</p>
                                    <p> 20$</p>
                                </div>
                                
                            </div>

                        </div>
                        <div className="onePic">
                            <img src="#" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            </div>
        </div>
    )
}

export default SectionHome;

