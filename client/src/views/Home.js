import  React from "react";
import HeaderHome from "../components/HeaderHome";
import MainHome from "../components/MainHome";
import BreadCrumb from "../components/BreadCrumb";


function Home() {
    return(

      <div>
          <BreadCrumb page="/home" />
          <div id="container-home" class="container-fluid">
              <HeaderHome />
          </div>
          <div>
              <MainHome />
          </div>
          
      </div>
    )
}


export default Home;