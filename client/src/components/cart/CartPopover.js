import React, { useState } from 'react';
import { ShoppingCart } from "@material-ui/icons";

export default function CartPopover() {

    const [open, setOpen] = useState(false)

    const handlePopoverOpen = () => {
        setOpen(true);
    };

    const handlePopoverClose = () => {
        setOpen(false);
    };

    return (
        <div className="">
            <ShoppingCart
                id="cart-icon-navbar"
                onMouseEnter={handlePopoverOpen}
            />
            {open ?
                <div>
                    <div className="position-relative">
                        <div onMouseLeave={handlePopoverClose} id="cart-popover-container" className="container position-absolute">
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="col-5">
                                    {/* <p className="fs-5 fw-bold"> */}
                                    VOTRE PANIER
                                    {/* </p> */}
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
                :
                null
            }
        </div>
    );
}