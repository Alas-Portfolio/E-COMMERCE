let cart = JSON.parse(localStorage.getItem('cart')) || [];

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
    let itemId = id === 'part1' ? 1 : 2; 

    let existingItemIndex = cart.findIndex(item => item.id === itemId);

    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += quantity;
    } else {
        cart.push({ id: itemId, name, price, quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartSummary();
}

function removeItemFromCart(id) {
    const index = cart.findIndex(item => item.id === id);

    if (index !== -1) {
        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
        } else {
            cart.splice(index, 1);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartSummary();
    } else {
        alert('Item not found.');
    }
}

function removeAllItemFromCart(id) {
    const index = cart.findIndex(item => item.id === id);

    if (index !== -1) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartSummary();
    } else {
        alert('Cart is already empty.');
    }
}

function updateCartSummary() {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

    let summary = storedCart.map(item => {
        return `${item.name} - $${item.price} x ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}
            <button class="checkout-remove" onclick="removeItemFromCart(${item.id})">Remove</button>
            <button class="checkout-remove-all" onclick="removeAllItemFromCart(${item.id})">Remove All</button>`;
    }).join('<br>');

    document.getElementById('cart-summary').innerHTML = summary || "No items added yet";
}

function showCheckoutCard() {
    let receiptDetails = cart.map(item => {
        return `${item.name} - $${item.price} x ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}`;
    }).join('<br>');

    document.getElementById('receipt-details').innerHTML = receiptDetails;

    document.getElementById('checkout-card').style.display = "flex";
}

function closeCheckoutCard() {
    document.getElementById('checkout-card').style.display = "none";
}

// Run initially
updateCartSummary();
