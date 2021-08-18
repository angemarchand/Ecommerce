import React, { useEffect, useState } from "react";
import { GETProducts } from "../services/api/Products";
import HomeCardProducts from "./HomeCardProducts";

function MainHome() {

    const [products, setProducts] = useState(null);

    useEffect(() => {
        async function getData() {
            await getProducts();
        }
        getData();

    }, [])

    const getProducts = async () => {
        const products = await GETProducts();
        setProducts(products);
    }

    return (
        <div className="container">
            <div className="row mt-3 p-5 ">
                <div className="col d-flex justify-content-end">
                    <img src="#" alt="" id="large-picture-left-banner" />
                </div>
                <div className="col my-auto d-none d-lg-block">
                    <div id="right-row-banner" className="row position-relative align-items-center">
                        <div className="col-7 d-flex mb-3">
                            <div className="me-4">
                                {products ? <HomeCardProducts product={products[0]} /> : null}
                            </div>
                            {products ? <HomeCardProducts product={products[1]} /> : null}
                            {/* <div className="border-white small-picture-background m-2">
                                <img className="small-picture-right-banner" src="#" alt="" />
                                <h4>Nom du produit </h4>
                                <p> Prix </p>
                            </div>
                            <div className="border-white small-picture-background m-2">
                                <img className="small-picture-right-banner" src="#" alt="" />
                                <h4>Nom du produit </h4>
                                <p> Prix </p>
                            </div> */}
                        </div>
                        <div className="col-7 d-flex ">
                            <div className="me-4">
                                {products ? <HomeCardProducts product={products[2]} /> : null}
                            </div>
                            {products ? <HomeCardProducts product={products[3]} /> : null}
                            {/* <div className="border-white small-picture-background m-2">
                                <img className="small-picture-right-banner" src="#" alt="" />
                                <h4>Nom du produit </h4>
                                <p> Prix </p>
                            </div>
                            <div className="border-white small-picture-background m-2">
                                <img className="small-picture-right-banner" src="#" alt="" />
                                <h4>Nom du produit </h4>
                                <p> Prix </p>
                            </div> */}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MainHome;