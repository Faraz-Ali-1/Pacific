// main.js

// 1. You commented this out (GOOD!)
// import products from "./API/products.json"; 

// 2. We keep the import of your rendering function
import { ShowProductContainer } from "./HomeProductCard.js";

// 3. Define the path to your JSON data
// *** IMPORTANT: Adjust this path if 'API' is inside another folder. 
// Assuming main.js is at the root and API/products.json is relative to it:

const BASE_PATH = window.location.pathname.endsWith('/Pacific') 
    ? window.location.pathname 
    : window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1);

const PRODUCT_DATA_PATH = `${BASE_PATH}Pacific/API/products.json`;


// 4. New: Create an async function to fetch data and render
const loadAndRenderProducts = async () => {
    try {
        // Use Fetch API to get the data
        const response = await fetch(PRODUCT_DATA_PATH);

        // Crucial Check: Ensure the fetch was successful (e.g., status 200)
        if (!response.ok) {
            throw new Error(`Failed to load products: HTTP status ${response.status}`);
        }

        // Convert the response to a JSON object
        const products = await response.json();

        // Call your rendering function with the fetched data
        ShowProductContainer(products); 

    } catch (error) {
        console.error("Error fetching or rendering products:", error);
        // Optional: Display a user-friendly error message on the page
    }
};

// 5. Execute the new function when the script runs
loadAndRenderProducts();


// NOTE: If you still get a 404 error after deployment, try changing the path:
// If your repository name is 'my-shop', try:
// const PRODUCT_DATA_PATH = "/my-shop/API/products.json";
