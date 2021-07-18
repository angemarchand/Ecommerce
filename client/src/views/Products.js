import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import MainProducts from "../components/MainProducts";
import Footer from "../components/Footer";


function Products() {
    return (
      <div id="articles">
          <Navbar />
          <Header />
          <MainProducts />
          <Footer />
      </div>
    );
  }
  
  export default Products;