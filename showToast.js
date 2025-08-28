export function showToast(operation) {
    const toast = document.createElement("div");
    toast.classList.add("toast");

    if (operation === "add") {
        toast.textContent = "Product added to cart!";
    } else {
        toast.textContent = "Product removed from the cart!";
    }

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 4000);

};