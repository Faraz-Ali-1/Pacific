import { getCartProductFromLS } from "./getCartProduct.js";

export const fetchfromCartLS = (cardValue, discountedPrice) => {
    let cartProducts = getCartProductFromLS();

    let existingProduct = cartProducts.find((curProd) => curProd.cardValue === cardValue);
    let quantity = 1;
    let price;

    if (existingProduct) {
        quantity = existingProduct.quantity;
        price = Number(existingProduct.price.toFixed(2));
    }
    return {quantity, price};

};
