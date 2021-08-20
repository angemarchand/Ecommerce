import { Clear } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { afterDiscountValue } from "../../services/helpers/afterDiscountValue";

export default function CartLine(props) {

    const [picture, setPicture] = useState(null);

    useEffect(() => {
        setPicture(process.env.PUBLIC_URL + "/assets/nopic.png")
    }, [])

    return (
        <div className="row align-items-center">
            <div className="col-md-2">
                <img className="cart-line-min-pic" src={picture} alt="#" />
            </div>
            <div className="col-md-7">
                <p className="m-0">{props.product.name}</p>
            </div>
            <div className="col-11 col-md-2">
                {props.product.discount ?
                    <div>
                        <p className="m-0">{afterDiscountValue(props.product.price, props.product.discount)}€</p>
                        <p className="m-0 text-danger old-price">{props.product.price}€</p>
                    </div>
                    :
                    <p className="m-0">{props.product.price}€</p>
                }

            </div>
            <div className="col-1 col-md-1">
                <Clear className="delete-icon" />
            </div>
            <hr className="m-0" />
        </div>
    );
}