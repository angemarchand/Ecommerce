import React, { useState } from 'react';
import { ShoppingCart } from "@material-ui/icons";
import { Link } from 'react-router-dom';
import CartPopoverLine from './CartPopoverLine';

export default function CartPopover() {

    const [open, setOpen] = useState(false)
    const [cartProducts, setCartProducts] = useState([1, 2, 3, 4, 5, 6, 7, 8])

    const handlePopoverOpen = () => {
        setOpen(true);
    };

    const handlePopoverClose = () => {
        setOpen(false);
    };

    return (
        <div className="position-relative">
            <ShoppingCart
                id="cart-icon-navbar"
                onMouseEnter={handlePopoverOpen}
            />
            <div>
                {open ?
                    <div onMouseLeave={handlePopoverClose} id="cart-popover-container" className="container position-absolute border">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="col-5">
                                <Link to={`/cart/id`}>
                                    <p id="popover-cart-btn" className="mt-3 m-0 fw-bold">
                                        VOTRE PANIER
                                    </p>
                                </Link>
                            </div>
                        </div>
                        <hr />
                        <div id="container-popover-lines" className="overflow-auto">
                            {cartProducts.map(item => {
                                return <div key={item} className="mb-2"><CartPopoverLine product={item} /></div>
                            })}
                        </div>
                    </div>
                    :
                    null
                }
            </div>
        </div>
    );
}