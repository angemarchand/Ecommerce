import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { useEffect, useState } from "react";
import CarouselCardProducts from "./CarouselCardProduct";
import { GETMostVisitedProducts } from "../services/api/Products";


const CarouselProducts = (props) => {

    const [activeTab, setActiveTab] = useState("memeCategorie");
    const [visitedProducts, setVisitedProducts] = useState(null);

    useEffect(() => {
        async function getData() {
          await getVisitedProducts();
        }
        getData();
        console.log(visitedProducts);
    
      }, [])
    
      const getVisitedProducts = async () => {
        const visitedProducts = await GETMostVisitedProducts();
        setVisitedProducts(visitedProducts);
      }

    return (
        <div id="carousel-product" className="container-fluid">
            <div className="row">
                <div id="carousel-product-tabs-col" className="col d-flex p-0">
                    {/* <div id={activeTab == "memeCategorie" ? "active-tab" : null}
                        className="carousel-product-tab border-end border-white p-5 pt-0 pb-0 align-items-center justify-content-center d-flex"
                        onClick={() => setActiveTab("memeCategorie")} >
                        <h3 className="m-3 fs-4">SIMILAIRE</h3>
                    </div> */}
                    <div id={activeTab == "plusvues" ? "active-tab" : null}
                        className="carousel-product-tab border-end border-white p-5 pt-0 pb-0 align-items-center justify-content-center d-flex"
                        onClick={() => setActiveTab("plusvues")} >
                        <h3 className="m-3 fs-4">LES PLUS VUES</h3>
                    </div>
                    {/* <div id={activeTab == "meilleursNotes" ? "active-tab" : null}
                        className="carousel-product-tab border-end border-white p-5 pt-0 pb-0 align-items-center justify-content-center d-flex"
                        onClick={() => setActiveTab("meilleursNotes")} >
                        <h3 className="m-3 fs-4">LES MIEUX NOTES</h3>
                    </div> */}
                </div>
            </div>
            {activeTab == "memeCategorie" ?
                <div className="row justify-contet-around align-items-center">
                    <ChevronLeft className="carousel-product-chevron col-1" />
                    <div className="col d-flex justify-content-center">
                        {/* {products.map(item => <CarouselCardProducts key={item.id} product={item} />)} */}
                    </div>
                    <ChevronRight className="carousel-product-chevron col-1" />
                </div>
                :
                null
            }
            {activeTab == "plusvues" ?
                <div className="row justify-contet-around align-items-center">
                    <ChevronLeft className="carousel-product-chevron col-1" />
                    <div className="col d-flex justify-content-center">
                        {visitedProducts.map(item => <CarouselCardProducts key={item.id} product={item} />)}
                    </div>
                    <ChevronRight className="carousel-product-chevron col-1" />
                </div>
                :
                null
            }
            {activeTab == "meilleursNotes" ?
                <div className="row justify-contet-around align-items-center">
                    <ChevronLeft className="carousel-product-chevron col-1" />
                    <div className="col d-flex justify-content-center">
                        {/* {products.map(item => <CarouselCardProducts key={item.id} product={item} />)} */}
                    </div>
                    <ChevronRight className="carousel-product-chevron col-1" />
                </div>
                :
                null
            }
        </div>
    );
}

export default CarouselProducts;