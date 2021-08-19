import { useEffect, useState, useRef } from "react";
import { ChevronRight, ChevronLeft, Add, Remove } from '@material-ui/icons';
import { GETPicturesByProductId } from "../services/api/Pictures";
import { retrieveToken } from "../services/authentication/User";

const LargeCardProduct = (props) => {

    const [pictures, setPictures] = useState(null);
    const [currentPicture, setCurrentPicture] = useState(null);
    const [currentPictureId, setCurrentPictureId] = useState(0);
    const [numberOfProduct, setNumberOfProduct] = useState(1);
    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            async function getData() {
                const pictures = await GETPicturesByProductId(props.product.id);
                setPictures(pictures);
                if (pictures[0]) {
                    setCurrentPicture(pictures[0].imageB64)
                } else {
                    setCurrentPicture(process.env.PUBLIC_URL + "/assets/nopic.png")

                }
            }
            getData();
        } else {
            setCurrentPicture(pictures[currentPictureId].imageB64);
        }
    }, [currentPictureId])

    const checkIfLoggedIn = () => {
        let token = retrieveToken();
        console.log(token);
    }

    const addToBasket = () => {
        console.log(props);
        console.log(numberOfProduct);
        if (numberOfProduct <= props.product.stock) {
            if (checkIfLoggedIn() === true) {
                //Add in db
            }
            else {
                //Ass in local storage
            }
            console.log("ici")
        }
        else {
            alert("Malheureusement notre stock n'est pas suffisant pour satisfaire votre demande.")
        }
    }

    return (
        <div id="large-card-product" className="container-fluid p-4">
            <div className="row m-2">
                <div className="col col-sm-9">
                    <div className="row">
                        <div className="col m-4 mt-0 mb-3">
                            <h2 className="fs-1">{props.product.name}</h2>
                            <p className="large-card-product-p fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <img style={{ objectFit: "contain" }} alt={props.product.name} className="m-1" id="large-card-product-banner-picture" src={currentPicture} />
                            <div id="large-card-product-carousel" className="d-flex justify-content-between align-items-center mt-3">
                                <ChevronLeft id="large-card-product-left-chevron" onClick={() => pictures[currentPictureId - 1] ? setCurrentPictureId(currentPictureId - 1) : setCurrentPictureId(pictures.length - 1)} />
                                {pictures ?
                                    pictures.map(item => {
                                        return <img alt={item.name} id={currentPicture === item.imageB64 ? "large-card-product-pic-active" : null} key={item.id} style={{ objectFit: "contain" }} className="large-card-product-banner-picture-min img-fluid m-1" src={item.imageB64} />
                                    })
                                    :
                                    null
                                }
                                <ChevronRight id="large-card-product-right-chevron" onClick={() => pictures[currentPictureId + 1] ? setCurrentPictureId(currentPictureId + 1) : setCurrentPictureId(0)} />
                            </div>
                        </div>
                        <div className="col">
                            <p id="large-card-product-banner-desc" className="large-card-product-p mt-3 fs-5">{props.product.description}</p>
                        </div>
                    </div>
                </div>
                <div id="large-card-product-banner-right" className="col col-sm-3 m-0">
                    <div className="row mt-3">
                        <div className="col d-flex justify-content-center">
                            <p className="fs-1">{props.product.price}€</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p className="fs-4">Quantité</p>
                            <div className="row justify-content-center border border-2 m-1">
                                <div className="col-3 d-flex justify-content-center border-2 border-end">
                                    <Remove id="large-card-product-add-product" onClick={() => numberOfProduct === 0 ? 0 : setNumberOfProduct(numberOfProduct - 1)} style={{ cursor: "pointer" }} />
                                </div>
                                <div className="col-6 d-flex justify-content-center align-items-center">
                                    {numberOfProduct}
                                </div>
                                <div className="col-3 d-flex justify-content-center border-2 border-start">
                                    <Add id="large-card-product-remove-product" onClick={() => setNumberOfProduct(numberOfProduct + 1)} style={{ cursor: "pointer" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mt-2">
                            <p style={{ height: "120px" }} className="fs-4">Avis</p>
                        </div>
                    </div>
                    <div className="row m-3">
                        <div className="col d-flex justify-content-center">
                            <button id="large-card-product-add-cart" className="btn rounded-0 fs-4" onClick={() => addToBasket()} >Ajouter</button>
                        </div>
                    </div>
                    <div className="row m-3 mt-4">
                        <div className="col d-flex justify-content-center">
                            <button id="large-card-product-buy-btn" className="btn rounded-0 fs-4">Acheter</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LargeCardProduct;