import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from 'axios';


export default function Home() {
  
  const config = {
    headers:{
      Authorization: 'Bearer' + localStorage.getItem('token')
    }
  }

  axios.get('user', config).then(
    res => {
      console.log(res);
    },
    err => {
      console.log(err);
    }
  )

  return (
    <Fragment>
      <Navbar />
      <p style={{ height: "40rem" }}></p>
      <Footer />
    </Fragment>
  );
}
