import { fetchfromCartLS } from "./fetchfromCartLS.js";
import { getCartProductFromLS } from "./getCartProduct.js";
import { removeProduct } from "./removeProduct.js";
import { updateCartProductTotal } from "./updateCartProductTotal.js";

const atcContainer = document.getElementById("atcContainer");
const atcTemplate = document.getElementById("templateAtc");

const showCartProducts = async () => {
    try {
        // 1. Fetch the data (Use the lowercase filename for GitHub)
        const response = await fetch("./API/products.json");
        const products = await response.json();

        let cartProducts = getCartProductFromLS();

        // 2. Filter products that are in the cart
        let filterProducts = products.filter((curProd) => {
            return cartProducts.some((curElem) => curElem.cardValue === curProd.cardValue);
        });

        // 3. Clear container before rendering (prevents duplicates)
        if(atcContainer) atcContainer.innerHTML = "";

        // 4. Render each product
        filterProducts.forEach((curProd) => {
            const {cardValue, category, name, image, discountedPrice} = curProd;
            let productClone = document.importNode(atcTemplate.content, true);

            const LSactualData = fetchfromCartLS(cardValue, discountedPrice);

            productClone.getElementById("cardValue").setAttribute("id", `card${cardValue}`);
            productClone.getElementById("category").textContent = category;
            
            // Fixed Image Path: Ensure JSON has "public/image.png"
            productClone.getElementById("image").src = image; 
            productClone.getElementById("image").alt = name;
            productClone.getElementById("name").textContent = name;
            productClone.getElementById("quantityNumber").textContent = LSactualData.quantity;
            productClone.getElementById("discountedPrice").textContent = LSactualData.price;

            productClone.getElementById("RemoveBtn")
                .addEventListener("click", () => removeProduct(cardValue));

            atcContainer.append(productClone);
        });

        // 5. Update the total AFTER rendering
        updateCartProductTotal();

    } catch (error) {
        console.error("Error loading cart:", error);
    }
};

// Run the function
showCartProducts();
