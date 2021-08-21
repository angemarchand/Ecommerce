import React from 'react';
import { getEmailFromToken, retrieveToken } from "../authentication/User";
import { POSTCarts, GETCartById } from '../api/Cart';
import { PATCHProducts, GETProductById } from '../api/Products';
import { GETUserByEmail, GETUserById } from '../api/Users';

export const addCartToBdd = async (idUser, product, quantity) => {
    const cart = await POSTCarts(idUser, product.id, quantity);

    let stock = product.stock - quantity;
    const body = {
        stock: parseInt(stock, 10),
    }

    const patchedProduct = await PATCHProducts(product.id, JSON.stringify(body))
}

export const addCartToLocalStorage = async (product, quantity) => {

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

    let stock = product.stock - quantity;
    const body = {
        stock: parseInt(stock, 10),
    }

    const patchedProduct = await PATCHProducts(product.id, JSON.stringify(body))
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

export const makeCartTab = async (cart) =>
{
    let item = null;
    let items = [];

    for (const line of cart)
    {
        item = await GETCartById(line);
        items.push(item);
    }
    
    return items;
}

export const getProductsFromCartTab = async (cart) =>
{
    let item = null;
    let items = [];
    
    for (const line of cart)
    {
        item = await GETProductById(line.products);
        items.push({item, 'quantity' : line.quantity});
    }

    return items;
}

export const getCartFromBdd = async () => {
    let token = retrieveToken();
    let email = getEmailFromToken(token);

    let user = await GETUserByEmail(email);
    let userAndCart = await GETUserById(user[0].id);
    
    let cart = userAndCart.carts;
    let cartTab = await makeCartTab(cart);
    let products = await getProductsFromCartTab(cartTab);

    return products;
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
