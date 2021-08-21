import { Clear } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { GETPicturesByProductId } from '../../services/api/Pictures'
import {deleteItem} from './CartProducts';

export default function CartLine(props) {

    const [picture, setPicture] = useState(null);

    useEffect(() => {
        setPicture(process.env.PUBLIC_URL + "/assets/nopic.png")
    }, [])

    useEffect(() => {
        async function getData() {
            await getPictures();
          }
          getData();
        
    }, [])

    const getPictures = async () => {
        let pictures = await GETPicturesByProductId(props.product.item.id);
        if (pictures[0] !== undefined)
        {
            setPicture(pictures[0].imageB64);
        }else{
            setPicture(process.env.PUBLIC_URL + "/assets/nopic.png")
        }
    }

    return (
        <div className="row align-items-center">
            <div className="col-md-2">
                <img className="cart-line-min-pic" src={picture} alt="#" />
            </div>
            <div className="col-md-5">
                <p className="m-0">{props.product.item.name}</p>
            </div>
            <div className="col-11 col-md-2">
                <p className="m-0">{props.product.item.price}€</p>
            </div>
            <div className="col-11 col-md-2">
                <p className="m-0">{props.product.quantity} unités</p>
            </div>
            <div className="col-1 col-md-1">
                <Clear onClick={() => props.deleteItem(props.product)} className="delete-icon" />
            </div>
            <hr className="m-0" />
        </div>
    );
}