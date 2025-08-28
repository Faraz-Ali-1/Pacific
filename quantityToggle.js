export const quantityToggle = (event, cardValue, stockNumber) => {
    const currentCardElement = document.getElementById(`card${cardValue}`);


    const productQuantity = currentCardElement.querySelector("#quantityNumber");

    let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;

    if (event.target.className === "decrementBtn") {
        if (quantity > 1) {
            quantity -= 1;
        }
    };

    if (event.target.className === "incrementBtn") {
        if (quantity < stockNumber) {
            quantity  += 1;
        } else if (quantity === stockNumber) {
            quantity = stockNumber;
        }
    };

    productQuantity.innerHTML = quantity;
    productQuantity.setAttribute("data-quantity", quantity.toString());
    return quantity;
};