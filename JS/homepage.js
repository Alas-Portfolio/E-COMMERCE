let cart = [];

function increaseQuantity(itemId) {
    let quantityElement = document.getElementById(itemId);
    let quantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = quantity + 1;
}

function decreaseQuantity(itemId) {
    let quantityElement = document.getElementById(itemId);
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
        quantityElement.textContent = quantity - 1;
    }
}

function addToCart(name, price, id) {
    let quantity = parseInt(document.getElementById(id).textContent);
    let existingItemIndex = cart.findIndex(item => item.name === name);

    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += quantity;
    } else {
        cart.push({ name, price, quantity });
    }

    updateCartSummary();
}

function updateCartSummary() {
    let summary = cart.map(item => {
        return `${item.name} - $${item.price} x ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}`;
    }).join('<br>');
    
    if (summary) {
        document.getElementById('cart-summary').innerHTML = summary;
    } else {
        document.getElementById('cart-summary').innerHTML = "No items added yet";
    }
}

function showCheckoutCard() {
    let receiptDetails = cart.map(item => {
        return `${item.name} - $${item.price} x ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}`;
    }).join('<br>');

    document.getElementById('receipt-details').innerHTML = receiptDetails;

    let checkoutCard = document.getElementById('checkout-card');
    checkoutCard.style.display = "flex";
}

function closeCheckoutCard() {
    let checkoutCard = document.getElementById('checkout-card');
    checkoutCard.style.display = "none";
}
