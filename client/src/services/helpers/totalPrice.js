export const totalPrice = (products) => {
    let total = 0;
    console.log(products)
    products.forEach(product => {
        total += product.item.price * product.quantity;
    });
    return total;
}