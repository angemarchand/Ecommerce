import React, { Fragment } from "react";
import Navbar from "./Navbar";
import FooterRegister from "../components/FooterRegister";
import Footer from "./Footer";

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <p style={{height:"40rem"}}></p>
      <FooterRegister />
    </Fragment>
  );
}
