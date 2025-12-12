// main.js

import { ShowProductContainer } from "./HomeProductCard.js";

// const BASE_PATH = window.location.pathname.endsWith('/Pacific') 
//     ? window.location.pathname 
//     : window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1);

const PRODUCT_DATA_PATH = `API/products.json`;



const loadAndRenderProducts = async () => {
    try {
        // Use Fetch API to get the data
        const response = await fetch(PRODUCT_DATA_PATH);

        
        if (!response.ok) {
            throw new Error(`Failed to load products: HTTP status ${response.status}`);
        }

        
        const products = await response.json();

        
        ShowProductContainer(products); 

    } catch (error) {
        console.error("Error fetching or rendering products:", error);
        
    }
};

loadAndRenderProducts();
