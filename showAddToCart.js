import products from "API/products.JSON";
import { fetchfromCartLS } from "./fetchfromCartLS.js";
import { getCartProductFromLS } from "./getCartProduct.js";
import { removeProduct } from "./removeProduct.js";
import { updateCartProductTotal } from "./updateCartProductTotal.js";

let cartProducts = getCartProductFromLS();

let filterProducts = products.filter((curProd) => {
    return cartProducts.some((curElem) => curElem.cardValue === curProd.cardValue);
});

// console.log(filterProducts);


const atcContainer = document.getElementById("atcContainer");
const atcTemplate = document.getElementById("templateAtc");


const showCartProducts = () => {
    filterProducts.forEach((curProd) => {
        const {cardValue, category, name, image, discountedPrice, stockNumber} = curProd;
        let productClone = document.importNode(atcTemplate.content, true);

        const LSactualData = fetchfromCartLS(cardValue, discountedPrice);

        productClone.getElementById("cardValue").setAttribute("id", `card${cardValue}`);
        productClone.getElementById("category").textContent = category;
        productClone.getElementById("image").src = image;
        productClone.getElementById("image").alt = name;
        productClone.getElementById("name").textContent = name;

        productClone.getElementById("quantityNumber").textContent = LSactualData.quantity;
        productClone.getElementById("discountedPrice").textContent = LSactualData.price;

        // increment and decrement button

        productClone.getElementById("RemoveBtn")
        .addEventListener("click",() => removeProduct(cardValue));

        atcContainer.append(productClone);
    });
};
showCartProducts();

// -------------------------
// show cart product total
// -------------------------

updateCartProductTotal();



