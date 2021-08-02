import  React from "react";
import HeaderHome from "../components/HeaderHome";
import MainHome from "../components/MainHome";

function Home() {
    return(

      <div>
          <div class="container-fluid">
              <HeaderHome />
          </div>
          <div>
              <MainHome />
          </div>
          
      </div>
    )
}


export default Home;