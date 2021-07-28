import { useEffect, useState } from "react";

const AboutProduct = (props) => {

    const [pictures, setPictures] = useState(null);
    const [activeTab, setActiveTab] = useState("descriptif");

    useEffect(() => {
    })

    return (
        <div id="about-product" className="container-fluid">
            <div className="row">
                <div id="about-product-tabs-col" className="col d-flex p-0">
                    <div id={activeTab == "descriptif" ? "active-tab" : null}
                        className="about-product-tab border-end border-white p-5 pt-0 pb-0 align-items-center justify-content-center d-flex"
                        onClick={() => setActiveTab("descriptif")} >
                        <h3 className="m-3 fs-4">DESCRIPTIF</h3>
                    </div>
                    <div id={activeTab == "ficheTechnique" ? "active-tab" : null}
                        className="about-product-tab border-end border-white p-5 pt-0 pb-0 align-items-center justify-content-center d-flex"
                        onClick={() => setActiveTab("ficheTechnique")} >
                        <h3 className="m-3 fs-4">FICHE TECHNIQUE</h3>
                    </div>
                    <div id={activeTab == "avisClients" ? "active-tab" : null}
                        className="about-product-tab border-end border-white p-5 pt-0 pb-0 align-items-center justify-content-center d-flex"
                        onClick={() => setActiveTab("avisClients")} >
                        <h3 className="m-3 fs-4">AVIS CLIENTS</h3>
                    </div>
                </div>
            </div>
            {activeTab == "descriptif" ?
                <div>
                    <div className="row p-4">
                        <div className="col m-4 mt- mb-3">
                            <h2 className="fs-1">{props.product.name}</h2>
                            <p id="about-product-banner-desc" className="about-product-p mt-3 fs-5">Quisque nec condimentum nibh, eget consequat magna. Nunc congue varius porttitor. Aenean nec dapibus dui. Nullam ipsum lorem, mollis accumsan accumsan eget, tincidunt id mauris. Phasellus mattis nisi vitae libero aliquam accumsan. Vivamus enim ipsum, maximus ut elementum non, tempor facilisis purus. Donec ut facilisis sapien. Suspendisse lorem enim, efficitur nec ex eu, aliquet ornare felis. Fusce egestas id tortor id bibendum.</p>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <img className="m-1" id="about-product-desc-picture" src="#" />
                        </div>
                    </div>
                    <div id="about-product-desc-bottom" className="row p-4 text-resume">
                        <div className="col m-4 mt- mb-3">
                            <h3 className="fs-1">RÉSUMÉ</h3>
                            <ul className="p-3 fs-5">
                                <li>Sem enim velit dui a id orci.</li>
                                <li>Nulla laoreet nullam dis lacus velit.</li>
                                <li>Ullamcorper sitati op tempus non.</li>
                                <li>Elementum dolor lectus mauris senectus arcu.</li>
                                <li>Ullamcorper sitati op tempus non.</li>
                                <li>Elementum dolor lectus mauris senectus arcu.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                :
                null
            }
            {activeTab == "ficheTechnique" ?
                <div className="fake-content">
                    <h3>FICHE TECHNIQUE</h3>
                </div>
                :
                null
            }
            {activeTab == "avisClients" ?
                <div className="fake-content">
                    <h3>Avis Clients</h3>
                </div>
                :
                null
            }
        </div>
    );
}

export default AboutProduct;