import { useEffect, useState } from "react";
import CartLine from "./CartLine";
import { DeleteForever } from '@material-ui/icons';
import { totalPrice } from "../../services/helpers/totalPrice";

function CartProduct() {

    // const [products, setProducts] = useState(null)
    const [products, setProducts] = useState([
        {
            name: "produit 1",
            description: "Si on le vend, c'est que tu en as besoin",
            price: 850
        },
        {
            name: "produit 2",
            description: "4 achetés, 0 offert.. c'est la crise mec",
            price: 550
        }
    ])
    const [total, setTotal] = useState(null)

    useEffect(() => {
        setTotal(totalPrice(products));
    }, [])

    return (
        <div id="cart-container" className="container-fluid p-4">
            <div className="d-flex justify-content-center"><p className="fs-3 fw-bold">VOTRE PANIER</p></div>
            <div className="row">
                <div className="col-2 d-none d-md-block"></div>
                <div className="col-7 d-none d-md-block">NOM</div>
                <div className="col-2 d-none d-md-block">PRIX</div>
                <div className="col-1 d-none d-md-block"><DeleteForever className="delete-icon"/></div>
            </div>
            <hr />
            {products ?
                products.map(item => {
                    return <CartLine product={item} />
                })
                :
                <p className="m-0 fs-4" >Votre panier est vide</p>
            }
            <div className="row">
            <div className="col-12 d-flex justify-content-center">
                <p className="fs-3">Total: {total}€</p>
            </div>
            <div className="col-12 d-flex justify-content-center">
                <button id="btn-cart-checkout" className="btn rounded-0">FINALISER LA COMMANDE</button>
            </div>
            </div>
        </div>
    );
}
export default CartProduct;