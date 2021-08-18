import { useEffect, useState } from "react";
import { GETPicturesByProductId } from "../services/api/Pictures";
import { makeSmallerText } from "../services/helpers/makeSmallerText";
import { Link } from "react-router-dom";

const HomeCardProducts = (props) => {

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
        if (pictures[0] !== undefined)
        {
            setPicture(pictures[0].imageB64);
        }
    }

    return (
        <div className="col">
            <Link to={`/product?id=${props.product.id}`}>
                <div className="card rounded-0 home-card-product">
                    <img className="home-card-product-img-top" src="#" />
                    <div className="card-body p-1 ">
                        <div className="card-title">
                            <h4 className="fs-5">{makeSmallerText(15, [props.product.name])}</h4>
                        </div>
                        <div className="card-text">
                            <p>{props.product.price}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default HomeCardProducts;