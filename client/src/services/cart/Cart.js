import React from 'react';
import { getEmailFromToken, retrieveToken } from "../authentication/User";
import { POSTCarts } from '../api/Cart';
import { PATCHProducts } from '../api/Products';

export const addCartToBdd = async (idUser, product, quantity) => {
    console.log(product.stock)
    const cart = await POSTCarts(idUser, product.id, quantity);

    let stock = product.stock - quantity;
    const body = {
        stock: parseInt(stock, 10),
    }

    const patchedProduct = await PATCHProducts(product.id, JSON.stringify(body))
    console.log(patchedProduct);
}

export const addCartToLocalStorage = () => {

}

export const howToAddCart = (product, quantity) => {
        if (quantity <= product.stock)
        {
            let token = retrieveToken();
            getEmailFromToken(token)
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
