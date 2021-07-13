fetch("./catalogo/catalogo.json")
    .then(response => response.json())
    .then(productsArray => renderAllProducts(productsArray));

function renderAllProducts(productsArray) {
    productsArray.forEach(product => renderAllProducts(product))

};

const findDiv = document.querySelector("#clothes-box");

function renderOneProduct(product) {
    const newElement = document.createElement('div')
    newElement.className = "content"
    newElement.innerHTML = `
    <div class="item-card">
        <div class="center">
        <img src="${product.img}" class="image">
        <h2>${prodct.titulo}</h2>
        <p>Precio: $${product.precio}</p>
        <button class="add-item">Add to Cart</button>
        </div>
    </div>`

    findDiv.append(newElement)
};

fetch("./catalogo/catalogo.json")
    .then(response => response.json())
    .then(cartItems => {
        cartArray = cartItems;
        renderAllCartItems(cartArray)
    });

function renderAllCartItems(cartItems) {
    cartItems.forEach(cartItem => renderCartItem(cartItem))


};

function renderCartItem(cartItem) {
    const newLi = document.createElement("li")
    newLi.innerHTML = `
    <p id="pTag">${cartItem.product.titulo}: $${cartItem.prodct.precio}
    <button class="delete-button">
    <span>remove</span>
    </button>
    </p>
    `
    findListOfItems.append(newLi);
};