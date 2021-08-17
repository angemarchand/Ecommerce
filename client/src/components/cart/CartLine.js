import { Clear } from '@material-ui/icons';

export default function CartLine(props) {

    return (
        <div className="row">
            <div className="col-md-2">
                <img src="#" alt="#" />
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