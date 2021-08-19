import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { GETPicturesByProductId } from "../services/api/Pictures";
import { ChevronRight, ChevronLeft } from "@material-ui/icons";
import { makeSmallerText } from "../services/helpers/makeSmallerText";
import { afterDiscountValue } from "../services/helpers/afterDiscountValue";


const CardProduct = (props) => {

    const [pictures, setPictures] = useState(null);
    const [currentPicture, setCurrentPicture] = useState(null);
    const [currentPictureId, setCurrentPictureId] = useState(null);
    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            async function getData() {
                await getPictures();
            }
            getData();
        } else {
            if(pictures[currentPictureId]) setCurrentPicture(pictures[currentPictureId].imageB64);
        }
    }, [currentPictureId])

    const getPictures = async () => {
        const pictures = await GETPicturesByProductId(props.id);
        setPictures(pictures);
        setCurrentPictureId(0);
        if (pictures[0]) {
            setCurrentPicture(pictures[0].imageB64)
        }
    }

    return (
        <div id="product-card" className="card border-0 mx-auto mb-4">
            <div className="card-product-container-pic position-relative">
            {props.discount ? <p className="carousel-card-product-discount ps-1 position-absolute">-{props.discount}%</p> : null}
                <ChevronLeft onClick={() => pictures[currentPictureId - 1] ? setCurrentPictureId(currentPictureId - 1) : setCurrentPictureId(pictures.length - 1)} id="card-product-chevron-pic-left" className="card-product-chevron-pic position-absolute" />
                <img className="card-products-img-top" alt={props.name} src={currentPicture ? currentPicture : process.env.PUBLIC_URL + "/assets/nopic.png"} />
                <ChevronRight onClick={() => pictures[currentPictureId + 1] ? setCurrentPictureId(currentPictureId + 1) : setCurrentPictureId(0)} id="card-product-chevron-pic-right" className="card-product-chevron-pic position-absolute" />
            </div>
            <Link to={`/product?id=${props.id}`}>
                <div className="product-card-body card-body">
                    <div className="card-title">
                        <h4>{makeSmallerText(26, [props.name])}</h4>
                    </div>
                    <div className="card-text h-75 mt-3 d-flex flex-column">
                        <div className="mb-auto">
                            <p >{makeSmallerText(56, [props.description])}</p>
                        </div>
                        <div className="fs-5">
                        {props.discount ?
                                <div className="d-flex">
                                    <p className="me-2">{afterDiscountValue(props.price, props.discount)}€</p>
                                    <p className="text-danger old-price">{props.price}€</p>
                                </div>
                                :
                                <p>{props.price}€</p>
                            }
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default CardProduct;