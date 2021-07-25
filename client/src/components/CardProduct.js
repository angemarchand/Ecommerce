import React from "react";
import { Link } from "react-router-dom";

const CardProduct = (props) => {

    return (
        <div id="product-card" className="card mx-auto mt-4">
            <Link to="/product">
                <img className="card-img-top" src="#" />
            </Link>
            <div id="product-card-body" className="card-body">
                <div className="card-title">
                    <h4>{props.name}</h4>
                </div>
                <div className="card-text">
                    <p>{props.description}</p>
                    <p>{props.price}</p>
                    <button></button>
                </div>
            </div>
        </div>
    );
}

export default CardProduct;