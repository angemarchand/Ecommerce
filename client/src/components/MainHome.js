import React from "react";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function MainHome(){
    return (
        <div className="container">
            <div className="row ">
                <div className="col-12 specialProducts">
                    <div className="d-flex">
                        <div className="text-card">
                            <h4>Accessoires</h4>
                            <div className="triangles"></div>
                        </div>
                         
                        <div className="text-card">
                            <h4>Portables</h4>
                            <div className="triangles"></div>
                        </div>
                        <div className="text-card">
                            <h4>Péripheriques</h4>
                            <div className="triangles"></div>
                        </div>
                        <div className="text-card">
                            <h4>Customiseur</h4>
                            <div className="triangles"></div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="row">
                    <div className="col-12">
                        <h5> Ici afficher des photos</h5>
                        <div className="d-flex">
                            <div className="bigPic">
                                <img src="#" alt="" />
                            </div>
                            <div className="somePics">
                                <div className="d-flex leftProducts">
                                    <div className="card-title mb-auto newDiv">
                                        <img src="#" alt="" />
                                        <h4> Le produit </h4>
                                        <p> Description de l'article</p>
                                        <p> 20$</p>
                                    </div>
                                    <div className="card-title mb-auto newDiv">
                                        <img src="#" alt="" />
                                        <h4> Le produit </h4>
                                        <p> Description de l'article</p>
                                        <p> 20$</p>
                                    </div>
                                </div>
                                <div className="d-flex rightProducts">
                                    <div className="card-title mb-auto newDiv">
                                        <img src="#" alt="" />
                                        <h4> Le produit </h4>
                                        <p> Description de l'article</p>
                                        <p> 20$</p>
                                    </div>
                                    <div className="card-title mb-auto newDiv">
                                        <img src="#" alt="" />
                                        <h4> Le produit </h4>
                                        <p> Description de l'article</p>
                                        <p> 20$</p>
                                    </div>
                                </div>

                            </div>
                            <div className="iconPrev">
                                <ArrowForwardIosIcon fontSize="large"></ArrowForwardIosIcon>
                            </div>

                        </div>

                    </div>
                </div>
        </div>
    )
}

export default MainHome;