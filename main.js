const productsGrid = document.querySelector('.rightSide');
const cartGrid = document.getElementById('cart');
const btnAdd = document.getElementById('btnAdd');
const btnDelete = document.getElementById('btnDelete');
const resultTotal = document.getElementById('total');

// fetch products
const fetchProducts = async() => {
    const products = await fetch('./catalogo/catalogo.json').then((response) => response.json());

    products.forEach((product) => {
        const productElm = document.createElement('div');
        productElm.classList.add('product');
        productElm.innerHTML = `
            <img src="./${product.img}">
            <div class="info">
                <h3>${product.titulo}</h3>
                <div class="action">
                    <span>${product.precio.toString()}$</span>
                    <button id="btnAdd" onclick="addToCart(${product.id}, '${product.titulo}', '${
			product.precio
		}')" >Add to Cart</button>
                </div>
            </div>
        `;
        productsGrid.append(productElm);
    });
};



let cart = [];

const getTotal = (array) => {
    let total = 0;
    array.forEach((c) => {
        total += Number(c.precio);
    });
    resultTotal.innerHTML = `$ ${total}`;
};

const addToCart = (id, titulo, precio) => {
    const existProduct = cart.find((c) => c.id === id);
    if (!existProduct) {
        cart.push({ id, titulo, precio });
        getTotal(cart);
        const cartElm = document.createElement('li');
        cartElm.id = `product-${id}`;
        cartElm.innerHTML = `
                <span>${titulo}</span>
                <button onclick="removeFromCart(${id})">x</button>
            `;
        cartGrid.append(cartElm);
    }
};

const removeFromCart = (id) => {
    const findProduct = cart.find((c) => c.id === id);
    if (cart.indexOf(findProduct) > -1) {
        Swal.fire({
            title: 'Are u sure?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: `Delete`,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Deleted!', '', 'success');
                cart.splice(cart.indexOf(findProduct), 1);
                document.getElementById(`product-${id}`).remove();
                getTotal(cart);
            } else if (result.isDenied) {
                Swal.fire('Product not deleted', '', 'info');
            }
        });
    }
};