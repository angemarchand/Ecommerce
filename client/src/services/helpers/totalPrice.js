import { afterDiscountValue } from "./afterDiscountValue";

export const totalPrice = (products) => {
    let total = 0;
    products.forEach(product => {
        if (product.item.discount) {
            total += afterDiscountValue(product.item.price, product.item.discount);
            console.log(total)
        } else {
            total += product.item.price;
        }
    });
    return total;
}