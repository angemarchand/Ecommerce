export const POSTCarts = async (idUser, idProduct, quantity) => {
    const response = await fetch('https://localhost:8000/api/carts', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            products: `/api/products/${idProduct}`,
            users: `/api/users/${idUser}`,
            quantity: quantity
          })
    })
    const cart = await response.json();
    return cart;
}

export const GETCartById = async (link) => {
    const response = await fetch(`https://localhost:8000${link}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
    const cart = await response.json();
    return cart;
}

//// UPDATE ONE ////
export const PATCHCart = async (id, body) => {
    const response = await fetch(`https://localhost:8000/api/carts/${id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/merge-patch+json',
        },
        body
    })
    const product = await response.json();
    return product;
}

export const DELETECartById = async (id) => {
        const response = await fetch(`https://localhost:8000/api/carts/${id}`, {
            method: "DELETE"
        })
        return response;
}

export const DELETECartByProductId = async (id) => {
    console.log(id)
    const response = await fetch('https://localhost:8000/api/carts/product?productId=' + id, {
        method: "DELETE"
    })
    return response;
}

export const GETCartByUserAndproduct = async (productId, userId) => {
    const response = await fetch(`https://localhost:8000/api/carts/product?productId=${productId}&userId=${userId}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
    const cart = await response.json();
    return cart;
}