import { afterDiscountValue } from "./afterDiscountValue";

export const totalPrice = (products) => {
    let total = 0;
    products.forEach(product => {
        if (product.discount) {
            total += afterDiscountValue(product.price, product.discount);
        } else {
            total += product.price;
        }
    });
    return total;
}