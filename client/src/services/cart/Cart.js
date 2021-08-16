import React from 'react';
import { retrieveToken } from "../authentication/User";

export const addCartToBdd = () => {

}

export const addCartToLocalStorage = () => {

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
