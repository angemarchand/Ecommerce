import { useEffect, useState } from "react";

const CarouselCardProducts = (props) => {

    const [products, setProducts] = useState([1, 2, 3, 4]);
    const [activeTab, setActiveTab] = useState(props.products);

    useEffect(() => {

    }, [])

    return (
        <div id="carousel-card-product" className="card rounded-0">
                <img className="carousel-card-product-img-top" src="#" />
            <div className="card-body">
                <div className="card-title">
                    <h4>{props.product.name}</h4>
                </div>
                <div className="card-text">
                    <p>{props.product.price}</p>
                </div>
            </div>
        </div>
    );
}

export default CarouselCardProducts;