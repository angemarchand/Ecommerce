import React from "react";

function MainHome(){
    return (
        <div className="container">
            {/* <div className="row ">
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
            </div> */}

            <div className="row mt-3 p-5 ">
                <div className="col d-flex justify-content-end">
                    <img src="#" alt="" id="large-picture-left-banner" />
                </div>
                <div className="col my-auto d-none d-lg-block">
                    <div id="right-row-banner" className="row position-relative align-items-center">
                        <div className="col-7 d-flex ">
                            <div className="border-white small-picture-background m-2">
                                <img className="small-picture-right-banner" src="#" alt="" />
                                <h4>Nom du produit </h4>
                                <p> Prix </p>
                            </div>
                            <div className="border-white small-picture-background m-2">
                                <img className="small-picture-right-banner" src="#" alt="" />
                                <h4>Nom du produit </h4>
                                <p> Prix </p>
                            </div>
                        </div>
                        <div className="col-7 d-flex ">
                            <div className="border-white small-picture-background m-2">
                                <img className="small-picture-right-banner" src="#" alt="" />
                                <h4>Nom du produit </h4>
                                <p> Prix </p>
                            </div>
                            
                            <div className="border-white small-picture-background m-2">
                                <img className="small-picture-right-banner" src="#" alt="" />
                                <h4>Nom du produit </h4>
                                <p> Prix </p>
                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MainHome;