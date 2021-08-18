import React, { useEffect, useState } from "react";
import { GETProducts } from "../services/api/Products";
import HomeCardProducts from "./HomeCardProducts";


function SectionHome() {

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
        <div id="homeSection" className="container-fluid ">
            <div className="row ms-5 mt-3 p-5">
                <div className="col my-auto d-none d-lg-block position-relative">
                    <div id="left-row-banner" className="row position-absolute">
                        <div className="col-7 d-flex align-items-center">
                            {products ? <HomeCardProducts product={products[4]} /> : null}
                            {products ? <HomeCardProducts product={products[5]} /> : null}
                        </div>
                        <div className="col-7 d-flex mt-3">
                            {products ? <HomeCardProducts product={products[6]} /> : null}
                            {products ? <HomeCardProducts product={products[7]} /> : null}
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

