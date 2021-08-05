import  React from "react";
import HeaderHome from "../components/HeaderHome";
import MainHome from "../components/MainHome";
// import SectionHome from "../components/SectionHome";

function Home() {
    return(

      <div>
          <div id="container-home" class="container-fluid">
              <HeaderHome />
          </div>
          <div>
              <MainHome />
          </div>

          <div>
              {/* <SectionHome /> */}
          </div>
          
      </div>
    )
}


export default Home;