import { useEffect, useState, useRef } from "react";
import CartLine from "./CartLine";
import { DeleteForever } from '@material-ui/icons';
import { totalPrice } from "../../services/helpers/totalPrice";
import { getCartFromBdd } from "../../services/cart/Cart";
import { DELETECartByProductId } from "../../services/api/Cart";

function CartProduct() {

    const [products, setProducts] = useState(null)
    const [removeProduct, setRemoveProduct] = useState(null);
    const [total, setTotal] = useState(null)
    const isInitialMount = useRef(true);


    useEffect(() => {

        async function getData() {
            let cart = await getCartFromBdd();
            setTotal(totalPrice(cart));
            if (cart[0]) {
                setProducts(cart);
            }
        }
        getData();

    }, [])

    useEffect(() => {
        if (removeProduct) {
            const response = removeProductFromTab(removeProduct);
            setProducts(response);
            setRemoveProduct(null)
        }
    }, [removeProduct])

    const removeProductFromDb = async (id) => {
        const response = await DELETECartByProductId(id);
    }

    const removeProductFromTab = (product) => {
        const index = products.findIndex(element => element.item.id === product.item.id);
        removeProductFromDb(product.item.id);
        let cache = products;
        cache.splice(index, 1);
        return cache;
    }

    const deleteItem = (product) => {
        setRemoveProduct(product)

    }

    return (
        <div id="cart-container" className="container-fluid p-4">
            <div className="d-flex justify-content-center"><p className="fs-3 fw-bold">VOTRE PANIER</p></div>
            <div className="row mb-2">
                <div className="col-2 d-none d-md-block"></div>
                <div className="col-5 d-none d-md-block">NOM</div>
                <div className="col-2 d-none d-md-block">PRIX</div>
                <div className="col-2 d-none d-md-block">QUANTITE</div>
                <div className="col-1 d-none d-md-block"><DeleteForever className="delete-icon" /></div>
            </div>
            <hr className="m-0" />
            {products ?
                products.map(item => {
                    return <CartLine key={item.item.id} product={item} deleteItem={deleteItem} />
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