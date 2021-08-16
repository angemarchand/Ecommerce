import { makeSmallerText } from "../../services/helpers/makeSmallerText";
import { Link } from "react-router-dom";

export default function CartPopoverLine(props) {

    return (
        <Link to={`/product?id=${props.id}`}>
            <div className="d-flex align-items-center">
                <img className="cart-popover-line-img m-0 me-2" src="#" alt="#" />
                <p className="cart-popover-line-text fs-6">{makeSmallerText(27, ["superber description du produit"])}</p>
                <p className="cart-popover-line-text fw-bold mx-auto" >100€</p>
            </div>
        </Link>
    );
}