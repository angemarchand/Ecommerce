import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GETPicturesByProductId } from "../services/api/Pictures";
import { ChevronRight, ChevronLeft } from "@material-ui/icons";


const CardProduct = (props) => {

    const [pictures, setPictures] = useState(null);
    const [currentPicture, setCurrentPicture] = useState(null);
    const [currentPictureId, setCurrentPictureId] = useState(null);

    //get picture by id_product
    useEffect(() => {
        async function getData() {
            await getPictures();
        }
        getData();

    }, [])

    const getPictures = async () => {
        const pictures = await GETPicturesByProductId(props.id);
        setPictures(pictures);
        setCurrentPictureId(0);
        if (pictures[0]) {
            setCurrentPicture(pictures[0].imageB64)
        }
    }
    //set picture with get data

    const nextImage = () => {
        let id = currentPictureId + 1;
        setCurrentPictureId(id);
        if (pictures[currentPictureId] != null) {
            setCurrentPicture(pictures[currentPictureId].imageB64);
        }
        else
            setCurrentPictureId(0);
    }

    const previousImage = () => {
        let id = currentPictureId - 1;
        setCurrentPictureId(id);
        if (pictures[currentPictureId] != null) {
            setCurrentPicture(pictures[currentPictureId].imageB64);
        }
        else
            setCurrentPictureId(pictures.length - 1)
    }

    return (
        <div id="product-card" className="card border-0 mx-auto mt-4">
            <div className="card-product-container-pic position-relative">
                <ChevronLeft id="card-product-chevron-pic-left" className="card-product-chevron-pic position-absolute" onClick={() => previousImage()} />
                <img className="card-products-img-top" src={currentPicture} />
                <ChevronRight id="card-product-chevron-pic-right" className="card-product-chevron-pic position-absolute" onClick={() => nextImage()} />
            </div>
            <Link to={`/product?id=${props.id}`}>
                <div className="product-card-body card-body">
                    <div className="card-title">
                        <h4>{props.name}</h4>
                    </div>
                    <div className="card-text h-75 mt-3 d-flex flex-column">
                        <div className="mb-auto">
                            <p >{props.description}</p>
                        </div>
                        <div>
                            <p>{props.price} €</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default CardProduct;