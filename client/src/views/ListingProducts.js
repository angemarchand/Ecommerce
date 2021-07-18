import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CardProduct from "../components/CardProduct";
import Footer from "../components/Footer";

function ListingProducts() {

  const [products, setProducts] = useState(null);

  useEffect(() => {
    async function getData() {
      await getProducts();
    }
    getData();

  }, [])

  const getProducts = async () => {
    const response = await fetch('https://localhost:8000/api/products', {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    const products = await response.json();
    setProducts(products);
  }

  return (
    <div>
      <Navbar />
      <Header />
      <div className="containerProducts">
        {
          products ?
            products.map(items => <CardProduct name={items.name} description={items.description} price={items.price} />)
            :
            null
        }
      </div>
      <Footer />
    </div>
  );
}

export default ListingProducts;