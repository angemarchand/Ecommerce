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