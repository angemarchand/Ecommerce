import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CardProduct from "../components/CardProduct";
import Footer from "../components/Footer";
import { GETProducts } from "../services/api/Products";

function ListingProducts() {

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
    <div id="products-background">
      <div className="container-fluid container-lg pt-3 pb-3" style={{ border: "soid" }}>
        <div className="row">
            {
              products ?
                products.map(items => <div key={items.id} className="col"><CardProduct name={items.name} description={items.description} price={items.price} /></div>)
                :
                null
            }
        </div>
      </div>
    </div>
  );
}


export default ListingProducts;