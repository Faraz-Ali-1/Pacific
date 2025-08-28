import { defineConfig } from "vite";
import { resolve } from "path";



export default defineConfig({
    build: {

        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'About.html'),
                addtocart: resolve(__dirname, 'addToCartPage.html'),
                contact: resolve(__dirname, 'contact Us.html'),
                products: resolve(__dirname, 'products.html'),
                
            },
        },
    },
});