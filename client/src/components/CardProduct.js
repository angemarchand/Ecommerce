import React from "react";

const CardProduct = (props) => {

    return (
        <div className="card mx-auto mt-3" style={{ width: "18rem" }}>
            <img className="card-img-top" src="#" />
            <div className="card-body">
                <div className="card-title">
                    <h3>{props.name}</h3>
                </div>
                <div className="card-text">
                    <p>{props.description}</p>
                    <p>{props.price}</p>
                </div>
            </div>
        </div>
    );
}

export default CardProduct;