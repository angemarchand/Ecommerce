import { useEffect, useState } from "react";
import { GETPicturesByProductId } from "../services/api/Pictures";
import { makeSmallerText } from "../services/helpers/makeSmallerText";
import { Link } from "react-router-dom";



const CarouselCardProducts = (props) => {

    const [products, setProducts] = useState([1, 2, 3, 4]);
    const [activeTab, setActiveTab] = useState(props.products);
    const [picture, setPicture] = useState(null);

    useEffect(() => {
        async function getData() {
            await getPictures();
          }
          getData();
        console.log(props)
        
    }, [])

    useEffect(() => {
        console.log(picture);
    }, [picture])

    const getPictures = async () => {
        let pictures = await GETPicturesByProductId(props.product.id);
        console.log(pictures);
        if (pictures[0] !== undefined)
        {
            setPicture(pictures[0].imageB64);
        }
    }

    return (
        <div className="col">
            <Link to={`/product?id=${props.product.id}`}>
            <div id="carousel-card-product" className="card rounded-0">
                    <img className="carousel-card-product-img-top" src={picture} />
                <div className="card-body">
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

export default CarouselCardProducts;