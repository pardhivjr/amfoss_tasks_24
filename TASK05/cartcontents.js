const cart = JSON.parse(localStorage.getItem('cart')) || [];

        const cartContents = document.getElementById('cartContents');
        let totalAmount = 0;

        if (cart.length === 0) {
            cartContents.innerHTML = '<p>Your cart is empty.</p>';
        } else {
            cart.forEach(product => {
                cartContents.innerHTML += `<div class="cart-item">${product.title} - $${product.price.toFixed(2)}</div>`;
                totalAmount += product.price;
            });

            document.getElementById('totalAmount').innerText = `Total: $${totalAmount.toFixed(2)}`;
        }

        function checkout() {
            alert('Proceeding to payment...');
            localStorage.removeItem('cart');
            window.location.href = 'confirmation.html'; 
        }
    