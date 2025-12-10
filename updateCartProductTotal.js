import { getCartProductFromLS } from "./getCartProduct.js";

export const updateCartProductTotal = () => {

    let proSubTotal = document.getElementById("subtotal");
    let proDiscount = document.getElementById("discount");
    let proTotal = document.getElementById("gtotal");

    let cartProducts = getCartProductFromLS();
    console.log(cartProducts);

    let initialValue = 0;

    let GtotalPrice = cartProducts.reduce((accum, curElem) => {
        let productPrice = parseInt(curElem.price) || 0;
        return accum + productPrice;
    },initialValue);

    proSubTotal.textContent = `$${GtotalPrice}`;

    let  Discount = (GtotalPrice*10/100).toFixed(0);
    proDiscount.textContent = `$${Discount}`;

    let final = GtotalPrice - Discount;
    proTotal.textContent = `$${final}`;   
    
};
