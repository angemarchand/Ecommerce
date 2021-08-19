import React from 'react';
import { getEmailFromToken, retrieveToken } from "../authentication/User";
import { POSTCarts } from '../api/Cart';
import { PATCHProducts } from '../api/Products';

export const addCartToBdd = async (idUser, product, quantity) => {
    const cart = await POSTCarts(idUser, product.id, quantity);

    let stock = product.stock - quantity;
    const body = {
        stock: parseInt(stock, 10),
    }

    const patchedProduct = await PATCHProducts(product.id, JSON.stringify(body))
}

export const addCartToLocalStorage = (product, quantity) => {

    if (localStorage.getItem('cart'))
    {
        let obj = localStorage.getItem('cart');
        obj = JSON.parse(obj)
        obj.cart.push({productId : product.id, quantity : quantity })
        localStorage.setItem('cart', JSON.stringify(obj))
    }
    else
    {
        let cart =  [{productId : product.id , quantity : quantity  } ];
        localStorage.setItem('cart', JSON.stringify({cart}));                                             
    }
}

export const getCartFromLocalStorage = () => {
    if(localStorage.getItem('cart'))
    {
        let obj = localStorage.getItem('cart');
        obj = JSON.parse(obj);
        return obj.cart;
    }
    else
        return null;
}

export const howToAddCart = (product, quantity) => {
        if (quantity <= product.stock)
        {
            let token = retrieveToken();
            if(token != null)
            {
                return true
            }
            else 
            {
                return false
            }
        }
        else
        {
            alert("Malheureusement notre stock n'est pas suffisant pour satisfaire votre demande.")
            return "error";
        }
    }
