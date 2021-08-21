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
        const response = await GETProducts();
        setProducts(response);
    }

    return (
        <div className="container">
            <div className="row mt-3 p-5 ">
                <div className="col d-flex justify-content-end">
                    <img src={process.env.PUBLIC_URL + "/assets/clavier-big.png"} alt="" id="large-picture-left-banner" />
                </div>
                <div className="col my-auto d-none d-lg-block">
                    <div id="right-row-banner" className="row position-relative align-items-center">
                        <div className="col-7 d-flex mb-3">
                            <div className="me-4">
                                {products ? <HomeCardProducts product={products[0]} /> : null}
                            </div>
                            {products ? <HomeCardProducts product={products[1]} /> : null}
                        </div>
                        <div className="col-7 d-flex ">
                            <div className="me-4">
                                {products ? <HomeCardProducts product={products[2]} /> : null}
                            </div>
                            {products ? <HomeCardProducts product={products[3]} /> : null}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MainHome;