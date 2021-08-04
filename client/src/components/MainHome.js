import React from "react";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function MainHome(){
    return (
        <div class="container">
            <div class="row ">
                <div class="col-12 specialProducts">
                    <div class="d-flex">
                        <div class="text-card">
                            <h4>Accessoires</h4>
                            <div class="triangles"></div>
                        </div>
                         
                        <div class="text-card">
                            <h4>Portables</h4>
                            <div class="triangles"></div>
                        </div>
                        <div class="text-card">
                            <h4>Péripheriques</h4>
                            <div class="triangles"></div>
                        </div>
                        <div class="text-card">
                            <h4>Customiseur</h4>
                            <div class="triangles"></div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="row">
                    <div class="col-12">
                        <h5> Ici afficher des photos</h5>
                        <div class="d-flex">
                            <div class="bigPic">
                                <img src="#" alt="" />
                            </div>
                            <div class="somePics">
                                <div class="d-flex leftProducts">
                                    <div class="card-title mb-auto newDiv">
                                        <img src="#" alt="" />
                                        <h4> Le produit </h4>
                                        <p> Description de l'article</p>
                                        <p> 20$</p>
                                    </div>
                                    <div class="card-title mb-auto newDiv">
                                        <img src="#" alt="" />
                                        <h4> Le produit </h4>
                                        <p> Description de l'article</p>
                                        <p> 20$</p>
                                    </div>
                                </div>
                                <div class="d-flex rightProducts">
                                    <div class="card-title mb-auto newDiv">
                                        <img src="#" alt="" />
                                        <h4> Le produit </h4>
                                        <p> Description de l'article</p>
                                        <p> 20$</p>
                                    </div>
                                    <div class="card-title mb-auto newDiv">
                                        <img src="#" alt="" />
                                        <h4> Le produit </h4>
                                        <p> Description de l'article</p>
                                        <p> 20$</p>
                                    </div>
                                </div>

                            </div>
                            <div class="iconPrev">
                                <ArrowForwardIosIcon fontSize="large"></ArrowForwardIosIcon>
                            </div>

                        </div>

                    </div>
                </div>
        </div>
    )
}

export default MainHome;