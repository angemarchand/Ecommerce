import React, { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import CardProduct from "../components/CardProduct";
// import Footer from "../components/Footer";
import { GETProduct } from "../services/api/Products";
import { useLocation, useHistory } from "react-router";
import SearchBar from "../components/SearchBar";

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
        console.log(product);
    }

    return (
        <div id="products-background">
            <div className="container-fluid container-lg pt-3 pb-3">
                <SearchBar />
            </div>
        </div>
    );
}


export default OneProduct;