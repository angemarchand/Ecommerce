import React from "react";
import { ChevronLeft } from "@material-ui/icons";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


function SectionHome(){

    return (
        <div id="homeSection" class="container-fluid">
            <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="d-flex">
                        <div class="iconLeft">
                            <ArrowBackIosIcon fontSize="large"></ArrowBackIosIcon>
                        </div>
                        <div class="manyPics">
                            <div class="d-flex leftPics">
                                <div class="card-title newDiv">
                                    <img src="#" alt="" />
                                    <h4> Le produit </h4>
                                    <p> Description de l'article</p>
                                    <p> 20$</p>
                                </div>
                                <div class="card-title newDiv">
                                    <img src="#" alt="" />
                                    <h4> Le produit </h4>
                                    <p> Description de l'article</p>
                                    <p> 20$</p>
                                </div>
                            </div>
                            <div class=" d-flex rightPics">
                                <div class="card-title newDiv">
                                    <img src="#" alt="" />
                                    <h4> Le produit </h4>
                                    <p> Description de l'article</p>
                                    <p> 20$</p>
                                </div>
                                <div class="card-title newDiv">
                                    <img src="#" alt="" />
                                    <h4> Le produit </h4>
                                    <p> Description de l'article</p>
                                    <p> 20$</p>
                                </div>
                                
                            </div>

                        </div>
                        <div class="onePic">
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

