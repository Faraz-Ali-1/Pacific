const cartValue = document.getElementById("cartValue");

export const updateCartValue = (cartProducts) => {
    return cartValue.innerHTML = `${cartProducts.length}`;
};  