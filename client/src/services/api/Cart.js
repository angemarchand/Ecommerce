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

export const DELETECartById = async (id) => {
        const response = await fetch(`https://localhost:8000/api/carts/${id}`, {
            method: "DELETE"
        })
        return response;
}

export const DELETECartByProductId = async (id) => {
    const response = await fetch('https://localhost:8000/api/carts/product?productId=' + id, {
        method: "DELETE"
    })
    return response;
}