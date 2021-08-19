export const afterDiscountPrice = (price, discount) => {
    let total = 0;
    total = price * discount / 100;
    total = price - total;
    return total;
}