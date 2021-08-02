import React, { useEffect, useState } from "react";
import { GETProduct } from "../services/api/Products";
import { useLocation, useHistory } from "react-router";
import SearchBar from "../components/SearchBar";
import BreadCrumb from "../components/BreadCrumb";
import LargeCardProduct from "../components/LargeCardProduct";
import AboutProduct from "../components/AboutProduct";
import CarouselProducts from "../components/CarouselProducts";

function OneProduct() {

    const [product, setProduct] = useState(null);
    const { search } = useLocation();
    const history = useHistory();

    useEffect(() => {
        async function getData() {
            await getProduct();
        }
        search ? getData() : history.push("/products");

    }, [])

    const getProduct = async () => {
        const product = await GETProduct(new URLSearchParams(search).get('id'));
        setProduct(product);
    }

    return (
        <div id="products-background">
            <div className="container-fluid container-lg pt-4 pb-4">
                <SearchBar />
                <BreadCrumb page="OneProduct" />
                {product ? <LargeCardProduct product={product} /> : null}
                <div className="mt-4">
                    {product ? <AboutProduct product={product} /> : null}
                </div>
                <div className="mt-4">
                    <CarouselProducts />
                </div>
            </div>
        </div>
    );
}


export default OneProduct;