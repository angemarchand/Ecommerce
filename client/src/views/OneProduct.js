import React, { useEffect, useState, useRef } from "react";
import { GETProduct, PATCHProducts} from "../services/api/Products";
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
    const isMounted = useRef(false);

    useEffect(() => {
        async function getData() {
            await getProduct();   
        }
        search ? getData() : history.push("/products");

    }, [])

    useEffect(() => {
        if (isMounted.current) {
            async function addOneVisit() {
                await addVisits();
            }
            addOneVisit()
          } else {
            isMounted.current = true;
          }
      }, [product])

    const getProduct = async () => {
        const responseProduct = await GETProduct(new URLSearchParams(search).get('id'));
        setProduct(responseProduct);
    }

    const addVisits = async () => {
        let visits = product.visits + 1;
        await PATCHProducts(product.id, JSON.stringify({visits: visits}) );
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