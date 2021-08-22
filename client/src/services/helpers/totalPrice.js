export const totalPrice = (products) => {
    let total = 0;
    products.forEach(product => {
        total += product.item.price * product.quantity;
    });
    return total;
}