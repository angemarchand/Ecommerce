import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CardProduct from "../components/CardProduct";
import Footer from "../components/Footer";
import { GETProducts } from "../services/api/Products";
import SearchBar from "../components/SearchBar";

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
      <div className="container-fluid container-lg pt-3 pb-3">
        <SearchBar />
        <div className="row">
          {
            products ?
              products.map(items => <div key={items.id} className="col"><CardProduct id={items.id} name={items.name} description={items.description} price={items.price} /></div>)
              :
              null
          }
        </div>
      </div>
    </div>
  );
}


export default ListingProducts;