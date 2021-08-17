import React from 'react';
import { getEmailFromToken, retrieveToken } from "../authentication/User";

export const addCartToBdd = (idUser, idProduct, quantity) => {
    console.log(idUser)
    console.log(idProduct)
    console.log(quantity)
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
