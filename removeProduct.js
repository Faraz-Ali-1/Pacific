import { getCartProductFromLS } from "./getCartProduct";
import { showToast } from "./showToast";
import { updateCartProductTotal } from "./updateCartProductTotal";
import { updateCartValue } from "./updateCartValue";

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