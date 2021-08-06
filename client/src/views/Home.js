import React from "react";
import HeaderHome from "../components/HeaderHome";
import MainHome from "../components/MainHome";
import BreadCrumb from "../components/BreadCrumb";
import SearchBar from "../components/SearchBar";


function Home() {
    return (

        <div id="container-home" >
            <div class="container-fluid container-lg pt-4 pb-4">
                <SearchBar />
                <BreadCrumb page="/home" />
                <HeaderHome />
            </div>
            <div>
                <MainHome />
            </div>

        </div>
    )
}


export default Home;