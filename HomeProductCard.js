import { addToCart } from "./addToCart.js";
import { quantityToggle } from "./quantityToggle.js";

const ProductsContainer = document.getElementById("products-container");
const productTemplate = document.getElementById("template");

export const ShowProductContainer = (products) => {
   if (!products || !ProductsContainer || !productTemplate) {
        return false;
    }

    products.forEach((curElem) => {
        const {cardValue, category, image, name, reviews, productDesc, discountedPrice, actualPrice, stockNumber} = curElem;
        
        const productClone = document.importNode(productTemplate.content, true);
        
        productClone.getElementById("cardValue").setAttribute("id", `card${cardValue}`);
        productClone.getElementById("category").textContent = category;
        productClone.getElementById("image").src = image;
        productClone.getElementById("image").alt = name;
        productClone.getElementById("name").textContent = name;
        productClone.getElementById("reviews").textContent = reviews;
        productClone.getElementById("productDesc").textContent = productDesc;
        productClone.getElementById("discountedPrice").textContent = discountedPrice;
        productClone.getElementById("actualPrice").textContent = actualPrice;
        productClone.getElementById("stockNumber").textContent = stockNumber;

        ////////////// stock handling //////////////

        productClone.getElementById("quantityElem").addEventListener("click", (event) => {
            quantityToggle(event, cardValue, stockNumber);
        });

        ///////////// add to cart handling /////////////

        productClone.getElementById("addToCartBtn").addEventListener('click', (event) => {
            addToCart(event, cardValue, stockNumber);
        });

        ProductsContainer.append(productClone);

    });

};

