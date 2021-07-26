import { useEffect, useState } from "react";
import { ChevronRight, ChevronLeft, Add, Remove } from '@material-ui/icons';

const LargeCardProduct = (props) => {

    const [pictures, setPictures] = useState([1, 2, 3]);
    const [numberOfProduct, setNumberOfProduct] = useState(1);

    useEffect(() => {
    })

    return (
        <div id="large-card-product" className="container-fluid p-4">
            <div className="row m-2">
                <div className="col col-sm-9">
                    <div className="row">
                        <div className="col m-4 mt-0 mb-3">
                            <h2 className="fs-1">{props.product.name}</h2>
                            <p className="large-card-product-p fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <img className="m-1" id="large-card-product-banner-picture" src="#" />
                            <div id="large-card-product-carousel" className="d-flex justify-content-between align-items-center mt-3">
                                <ChevronLeft id="large-card-product-left-chevron" />
                                {pictures.map(item => {
                                    return <img key={item} className="large-card-product-banner-picture-min" src="#" />
                                })}
                                <ChevronRight id="large-card-product-right-chevron" />
                            </div>
                        </div>
                        <div className="col">
                            <p id="large-card-product-banner-desc" className="large-card-product-p mt-3">Quisque nec condimentum nibh, eget consequat magna. Nunc congue varius porttitor. Aenean nec dapibus dui. Nullam ipsum lorem, mollis accumsan accumsan eget, tincidunt id mauris. Phasellus mattis nisi vitae libero aliquam accumsan. Vivamus enim ipsum, maximus ut elementum non, tempor facilisis purus. Donec ut facilisis sapien. Suspendisse lorem enim, efficitur nec ex eu, aliquet ornare felis. Fusce egestas id tortor id bibendum.</p>
                        </div>
                    </div>
                </div>
                <div id="large-card-product-banner-right" className="col col-sm-3 m-0">
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <p className="fs-1">{props.product.price}€</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p className="fs-4">Nombre</p>
                            <div className="row justify-content-center border border-2 m-1">
                                <div className="col-3 d-flex justify-content-center border-2 border-end">
                                    <Remove id="large-card-product-add-product" onClick={() => numberOfProduct == 0 ? 0 : setNumberOfProduct(numberOfProduct - 1)} style={{ cursor: "pointer" }} />
                                </div>
                                <div className="col-6 d-flex justify-content-center align-items-center">
                                    {numberOfProduct}
                                </div>
                                <div className="col-3 d-flex justify-content-center border-2 border-start">
                                    <Add id="large-card-product-remove-product" onClick={() => setNumberOfProduct(numberOfProduct + 1)} style={{ cursor: "pointer" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mt-2">
                            <p style={{ height: "120px" }} className="fs-4">Avis</p>
                        </div>
                    </div>
                    <div className="row m-3">
                        <div className="col d-flex justify-content-center">
                            <button id="large-card-product-add-cart" className="btn rounded-0 fs-4">Ajouter</button>
                        </div>
                    </div>
                    <div className="row m-3 mt-4">
                        <div className="col d-flex justify-content-center">
                            <button id="large-card-product-buy-btn" className="btn rounded-0 fs-4">Acheter</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LargeCardProduct;