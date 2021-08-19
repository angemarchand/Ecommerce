import { useEffect, useState } from "react";
import { GETPicturesByProductId } from "../services/api/Pictures";
import { makeSmallerText } from "../services/helpers/makeSmallerText";
import { Link } from "react-router-dom";
import { afterDiscountValue } from "../services/helpers/afterDiscountValue";

const CarouselCardProducts = (props) => {

    const [picture, setPicture] = useState(null);

    useEffect(() => {
        async function getData() {
            await getPictures();
        }
        getData();

    }, [])

    useEffect(() => {
    }, [picture])

    const getPictures = async () => {
        let pictures = await GETPicturesByProductId(props.product.id);
        if (pictures[0] !== undefined) {
            setPicture(pictures[0].imageB64);
        } else {
            setPicture(process.env.PUBLIC_URL + "/assets/nopic.png")
        }
    }

    return (
        <div className="col">
            <Link to={`/product?id=${props.product.id}`}>
                <div id="carousel-card-product" className="card border-0 rounded-0">
                    {props.product.discount ? <p className="carousel-card-product-discount ps-1 position-absolute">-{props.product.discount}%</p> : null}
                    <img className="carousel-card-product-img-top" src={picture} />
                    <div className="card-body">
                        <div className="card-title">
                            <h4 className="fs-5">{makeSmallerText(15, [props.product.name])}</h4>
                        </div>
                        <div className="d-flex card-text fs-5">
                            {props.product.discount ?
                                <div className="d-flex">
                                    <p className="me-2">{afterDiscountValue(props.product.price, props.product.discount)}€</p>
                                    <p className="text-danger old-price">{props.product.price}€</p>
                                </div>
                                :
                                <p>{props.product.price}€</p>
                            }
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default CarouselCardProducts;