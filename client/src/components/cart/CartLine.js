import { Clear } from '@material-ui/icons';
import { useEffect, useState } from 'react';

export default function CartLine(props) {

    const[picture, setPicture] = useState(null);

    useEffect(() => {
        setPicture(process.env.PUBLIC_URL + "/nopic.png")
    }, [])

    return (
        <div className="row">
            <div className="col-md-2">
                <img className="cart-line-min-pic" src={process.env.PUBLIC_URL + "/nopic.png"} alt="#" />
            </div>
            <div className="col-md-7">
                <p>{props.product.name}</p>
            </div>
            <div className="col-11 col-md-2">
                <p>{props.product.price}€</p>
            </div>
            <div className="col-1 col-md-1">
                <Clear className="delete-icon" />
            </div>
            <hr />
        </div>
    );
}