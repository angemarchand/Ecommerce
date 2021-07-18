import React from "react";

const CardProduct = (props) => {

    return (
        <div className="cardProduct">
            <div className="cardTop">
                <img src="#" />
            </div>
            <div className="cardBottom">
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <p>{props.price}</p>
            </div>
        </div>
    );
}

export default CardProduct;