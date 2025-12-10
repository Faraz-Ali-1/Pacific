import { getCartProductFromLS } from "./getCartProduct.js";
import { showToast } from "./showToast.js";
import { updateCartProductTotal } from "./updateCartProductTotal.js";
import { updateCartValue } from "./updateCartValue.js";

export const removeProduct = (cardValue) =>{
    let cartProducts = getCartProductFromLS();
    cartProducts = cartProducts.filter((curProd) => curProd.cardValue !== cardValue);

    /////// update the locale storage data ///////

    localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));

    let removeDiv = document.getElementById(`card${cardValue}`);

    if (removeDiv){
        removeDiv.remove();

        // show the remove notification
        showToast('remove');
    };

    updateCartValue(cartProducts);
    updateCartProductTotal();


};
