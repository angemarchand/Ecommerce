import { useEffect, useState } from "react";
import { makeSmallerText } from "../services/helpers/makeSmallerText";


const CarouselCardProducts = (props) => {

    const [products, setProducts] = useState([1, 2, 3, 4]);
    const [activeTab, setActiveTab] = useState(props.products);

    useEffect(() => {
        console.log(props)
    }, [])

    return (
        <div className="col">
            <div id="carousel-card-product" className="card rounded-0">
                    <img className="carousel-card-product-img-top" src="#" />
                <div className="card-body">
                    <div className="card-title">
                        <h4 className="fs-5">{makeSmallerText(15, [props.product.name])}</h4>
                    </div>
                    <div className="card-text">
                        <p>{props.product.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarouselCardProducts;