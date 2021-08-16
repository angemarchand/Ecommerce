import { useState } from "react";
import CartLine from "./CartLine";

function CartProduct() {

    const [products, setProducts] = useState(null)
    // const [products, setProducts] = useState([
    //     {
    //         name: "produit 1",
    //         description: "Si on le vend, c'est que tu en as besoin",
    //         price: 850
    //     },
    //     {
    //         name: "produit 2",
    //         description: "4 achetés, 0 offert.. c'est la crise mec",
    //         price: 550
    //     }
    // ])

    return (
        <div id="cart-container" className="container p-4">
            {products ?
                products.map(item => {
                    return <CartLine products={item} />
                })
                :
                <p className="m-0 fs-5" >Votre panier est vide</p>
            }
        </div>
    );
}
export default CartProduct;