import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <p style={{ height: "40rem" }}></p>
      <Footer />
    </Fragment>
  );
}
