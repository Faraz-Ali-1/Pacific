import { getCartProductFromLS } from "./getCartProduct";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLS();

export const addToCart = (event, cardValue, stockNumber) => {
    const currentProductElement = document.querySelector(`#card${cardValue}`);


    let arrLocalStorageProduct = getCartProductFromLS();

    let quantity = currentProductElement.querySelector("#quantityNumber").innerHTML;
    let price = currentProductElement.querySelector("#discountedPrice").innerHTML;

    price = price.replace("$", "");


    let existingProduct = arrLocalStorageProduct.find((curProd) => curProd.cardValue === cardValue);

    if (existingProduct && quantity > 1) {

        quantity = Number(existingProduct.quantity) + Number(quantity);
        price = Number(price * quantity);

        let updatedCart = {cardValue, price, quantity};

        updatedCart = arrLocalStorageProduct.map((curProd) => {
            return curProd.cardValue === cardValue ? updatedCart : curProd;
        });
        console.log(updatedCart);

    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));

    showToast("add");
    };

    if (existingProduct) {
        return false;
    }

    price = Number(price * quantity);
    quantity = Number(quantity);

    let updatedCart = {cardValue, price, quantity};
    arrLocalStorageProduct.push(updatedCart);
    localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

    updateCartValue(arrLocalStorageProduct);

    showToast("add");
};