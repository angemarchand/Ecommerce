export const afterDiscountValue = (value, discount) => {
    return value - (value * discount / 100);
}