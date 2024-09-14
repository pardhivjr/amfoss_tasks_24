const terminalOutput = document.querySelector('.terminal-output');
const terminalInput = document.querySelector('input[type="text"]');
let cart = [];

    async function fetchProducts() {
        const response = await fetch('https://fakestoreapi.com/products');
        return await response.json();
    }

function handleInput(command) {             
    const args = command.trim().split(' ');
    const action = args[0];
    const param = args[1];

    switch (action) {
        case 'list':
            listProducts();
            break;
        case 'details':
            if (param) {
                showProductDetails(param);
            } else {
                terminalOutput.innerHTML += "Please provide a product ID.\n";
            }
            break;
        case 'add':
            if (param) {
                addToCart(param);
            } else {
                terminalOutput.innerHTML += "Please provide a product ID.\n";
            }
            break;
        case 'remove':
            if (param) {
                removeFromCart(param);
            } else {
                terminalOutput.innerHTML += "Please provide a product ID.\n";
            }
            break;
        case 'cart':
            viewCart();
            break;
        case 'buy':
            proceedToCheckout();
            break;
        case 'clear':
            clearTerminal();
            break;
        case 'search':
            if (param) {
                searchProduct(param);
            } else {
                terminalOutput.innerHTML += "Please provide a product name.\n";
            }
            break;
        case 'sort':
            if (param) {
                sortProducts(param);
            } else {
                terminalOutput.innerHTML += "Please provide a sort criterion (price/name).\n";
            }
            break;
        default:
            terminalOutput.innerHTML += `Invalid command: ${command}\n`;
            break;
    }

    terminalInput.value = '';
}

    async function listProducts() {
        const products = await fetchProducts();
        products.forEach(product => {   
            terminalOutput.innerHTML += `${product.id}: ${product.title} - $${product.price.toFixed(2)}\n`;
        });
    }

async function showProductDetails(productId) {
    const products = await fetchProducts();
    const product = products.find(p => p.id == productId);
    if (product) {
        terminalOutput.innerHTML += `\n${product.title}\nPrice: $${product.price.toFixed(2)}\nDescription: ${product.description}\n\n`;
    } else {
        terminalOutput.innerHTML += `Product with ID ${productId} not found.\n`;
    }
}

async function addToCart(productId) {
    const products = await fetchProducts();
    const product = products.find(p => p.id == productId);
    if (product) {
        cart.push(product);
        terminalOutput.innerHTML += `${product.title} added to cart.\n`;
    } else {
        terminalOutput.innerHTML += `Product with ID ${productId} not found.\n`;
    }
}

function removeFromCart(productId) {
    const index = cart.findIndex(p => p.id == productId);
    if (index > -1) {
        terminalOutput.innerHTML += `${cart[index].title} removed from cart.\n`;
        cart.splice(index, 1);
    } else {
        terminalOutput.innerHTML += `Product with ID ${productId} not in cart.\n`;
    }
}

function viewCart() {
    if (cart.length === 0) {
        terminalOutput.innerHTML += "Your cart is empty.\n";
    } else {
        cart.forEach(product => {
            terminalOutput.innerHTML += `${product.id}: ${product.title} - $${product.price.toFixed(2)}\n`;
        });
    }
}

function clearTerminal() {
    terminalOutput.innerHTML = '';
}

async function searchProduct(productName) {
    const products = await fetchProducts();
    const results = products.filter(product => product.title.toLowerCase().includes(productName.toLowerCase()));
    if (results.length > 0) {
        results.forEach(product => {
            terminalOutput.innerHTML += `${product.id}: ${product.title} - $${product.price.toFixed(2)}\n`;
        });
    } else {
        terminalOutput.innerHTML += `No products found with the name "${productName}".\n`;
    }
}

async function sortProducts(criteria) {
    const products = await fetchProducts();
    let sortedProducts;
    if (criteria === 'price') {
        sortedProducts = products.sort((a, b) => a.price - b.price);
    } else if (criteria === 'name') {
        sortedProducts = products.sort((a, b) => a.title.localeCompare(b.title));
    } else {
        terminalOutput.innerHTML += "Invalid sort criterion. Use 'price' or 'name'.\n";
        return;
    }
    sortedProducts.forEach(product => {
        terminalOutput.innerHTML += `${product.id}: ${product.title} - $${product.price.toFixed(2)}\n`;
    });
}

function proceedToCheckout() {
    if (cart.length > 0) {
        console.log(cart);  
        localStorage.setItem('cart', JSON.stringify(cart));

        window.location.href = 'cartcontents.html';
    } else {
        terminalOutput.innerHTML += "Your cart is empty.\n";
    }
    
}

terminalInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        handleInput(terminalInput.value);
    }
});

console.log(cart);  

