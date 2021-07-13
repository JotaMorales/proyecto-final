let respuesta
    // let respuesta = prompt('Llego el HOT SALE!, encontraste lo que buscabas?');
console.log(respuesta);
if (respuesta == 'no') {
    alert('Que estas esperando!?');
} else if (respuesta == 'si') {
    console.log(respuesta);
    alert('Bienvenido!');
}


function cuotas(valorTotal, cantidadCuotas) {
    return valorTotal / cantidadCuotas;
}
if (respuesta == 'si') {

}


let totalIngresado //= parseInt(prompt('¿Cual es el valor del producto?'));
let cuotasIngresados //= parseInt(prompt('¿Cuantas cuotas quieres?'));
    //alert('El valor de cada cuota es $' + (cuotas(totalIngresado, cuotasIngresados)).toFixed(2));

const ArrayProductos = [];



class Producto {
    constructor(marca, temporada, talle, stock, precio) {
        this.marca = marca;
        this.temporada = temporada;
        this.talle = talle;
        this.stock = stock;
        this.precio = parseFloat(precio);
    }
    agregar() {
        for (const producto in this) {
            console.log(producto + ": " + this[producto]);
        }
    }

}



let producto1 = new Producto("camiseta Cardinals", 2021, 3, true, 2199.00);
let producto2 = new Producto("camiseta Cardinals", 2021, 4, true, 2199.00);
let producto3 = new Producto("camiseta Cardinals", 2021, 2, false, 2199.00);
let producto4 = new Producto("camiseta Estrella", 2020, 3, true, 1899.00);
let producto5 = new Producto("camiseta Estrella", 2020, 4, true, 1899.00);
let producto6 = new Producto("camiseta Estrella", 2020, 2, false, 1899.00);
let producto7 = new Producto("camiseta Velocidad y Resistencia", 2020, 3, true, 1799.00);
let producto8 = new Producto("camiseta Velocidad y Resistencia", 2020, 4, true, 1799.00);
let producto9 = new Producto("camiseta Velocidad y Resistencia", 2020, 2, false, 1799.00);
let producto10 = new Producto("camiseta Velocidad y Resistencia Vintage", 2019, 3, true, 2199.00);
let producto11 = new Producto("camiseta Velocidad y Resistencia Vintage", 2019, 4, true, 2199.00);
let producto12 = new Producto("camiseta Velocidad y Resistencia Vintage", 2019, 2, false, 2199.00);
let producto13 = new Producto("camiseta Bahiense del Norte", 2021, 3, true, 2199.00);
let producto14 = new Producto("camiseta Bahiense del Norte", 2021, 4, true, 2199.00);
let producto15 = new Producto("camiseta Bahiense del Norte", 2021, 2, false, 2199.00);
let producto16 = new Producto("camiseta Reconquista", 2020, 3, true, 1899.00);
let producto17 = new Producto("camiseta Reconquista", 2020, 4, true, 1899.00);
let producto18 = new Producto("camiseta Reconquista", 2020, 2, false, 1899.00);
let producto19 = new Producto("camiseta Fireballs", 2019, 3, true, 1799.00);
let producto20 = new Producto("camiseta Fireballs", 2019, 4, true, 1799.00);
let producto21 = new Producto("camiseta Fireballs", 2019, 2, false, 1799.00);
let producto22 = new Producto("camiseta Academia Muresull", 2019, 3, true, 1799.00);
let producto23 = new Producto("camiseta Academia Muresull", 2019, 4, true, 1799.00);
let producto24 = new Producto("camiseta Academia Muresull", 2019, 2, false, 1799.00);
let producto25 = new Producto("camiseta Campus Navallo-Agullo", 2021, 3, true, 2199.00);
let producto26 = new Producto("camiseta Campus Navallo-Agullo", 2021, 4, true, 2199.00);
let producto27 = new Producto("camiseta Campus Navallo-Agullo", 2021, 2, false, 2199.00);


producto12.agregar(Producto);

ArrayProductos.push(producto1);
ArrayProductos.push(producto2);
ArrayProductos.push(producto3);
ArrayProductos.push(producto4);
ArrayProductos.push(producto5);
ArrayProductos.push(producto6);
ArrayProductos.push(producto7);
ArrayProductos.push(producto8);
ArrayProductos.push(producto9);
ArrayProductos.push(producto10);
ArrayProductos.push(producto11);
ArrayProductos.push(producto12);
ArrayProductos.push(producto13);
ArrayProductos.push(producto14);








console.log(ArrayProductos);
const nuevoArray = ArrayProductos.length;
console.log(nuevoArray);


const off = [producto7, producto8, producto9, producto19, producto20, producto21];
const offSale = off.map(precios => precios.precio -= 199);
console.log(offSale);
console.log(off.length);

off.sort(function(a, b) {
    return b.talle - a.talle;
})
const encontrado = off.find(elemento => elemento.precio < 2100);
console.log(encontrado);

let preguntaDeTalle //= parseInt(prompt("Cual es tu talle?"));
if (preguntaDeTalle == 2) {
    alert("Hay stock")

}
const ingresado = ArrayProductos.find(function(item) {
    const talleBuscado = item.talle == 4;

    console.log(talleBuscado);

})






ArrayProductos.sort(function(a, b) {
    return a.precio - b.precio
})

// const CatalogoProductos = [{
//         id: 1,
//         titulo: "Camiseta Cardinals",
//         temporada: 2021,
//         talle: 3,
//         stock: true,
//         precio: '$ 2199.00',
//         img: "./img/cardinals.jpeg ",
//     },
//     {
//         id: 2,
//         titulo: "Camiseta Estrella",
//         temporada: 2020,
//         talle: 3,
//         stock: true,
//         precio: '$ 1899.00',
//         img: "./img/estrella.jpeg "
//     },
//     {
//         id: 3,
//         titulo: "Camiseta Velocidad y Resistencia Vintage",
//         temporada: 2019,
//         talle: 3,
//         stock: true,
//         precio: '$ 2199.00',
//         img: "./img/velocidad.jpeg "

//     },
//     {
//         id: 4,
//         titulo: "Camiseta Velocidad y Resistencia",
//         temporada: 2020,
//         talle: 3,
//         stock: true,
//         precio: '$ 1799.00',
//         img: "./img/velocidad2.jpeg "
//     }, {
//         id: 5,
//         titulo: "Camiseta Bahiense del Norte",
//         temporada: 2021,
//         talle: 3,
//         stock: true,
//         precio: '$ 2199.00',
//         img: "./img/bdn.jpeg "
//     }, {
//         id: 6,
//         titulo: "Camiseta Reconquista",
//         temporada: 2020,
//         talle: 3,
//         stock: true,
//         precio: '$ 1899.00',
//         img: "./img/reconquista.jpeg "
//     }, {
//         id: 7,
//         titulo: "Camiseta Fireballs",
//         temporada: 2019,
//         talle: 3,
//         stock: true,
//         precio: '$ 1799.00',
//         img: "./img/Fireballs.jpg"
//     }, {
//         id: 8,
//         titulo: "Camiseta Academia Muresull",
//         temporada: 2019,
//         talle: 3,
//         stock: true,
//         precio: '$ 1799.00',
//         img: "./img/futbol1.jpeg "
//     },
//     {
//         id: 9,
//         titulo: "Camiseta Campus Navallo-Agullo",
//         temporada: 2021,
//         talle: 3,
//         stock: true,
//         precio: '$ 2199.00',
//         img: "./img/FullSizeRender-1.jpg "
//     }
// ];

const jsonLocal = "./catalogo/catalogo.json";
$.getJSON(jsonLocal, function(data, estado) {
    if (estado === "success") {
        let misDatos = data;

        const hijos = $('.dato');
        console.log(hijos);

        for (const dato of misDatos) {
            $(".cont").append(`<div class="contenedor-carrito-item card dato">
            <img class="imagenCarrito" src=${dato.img}
            <h4>${dato.titulo}</h4>
            <p class="precio">Precio: ${dato.precio}</p>
            <p class="precio">${dato.temporada}</p>
            <button  class="btn btn-danger btn-sm" id="btn1">Eliminar</button>


            </div>`)

            $("#btn1").click(() => {

                $(".contenedor-carrito-item").trigger("remove");
                console.log("#btn1");
            });



        }

    };

    const section = document.querySelector('.contenedor-catalogo');

    console.log(section);


    for (const element of CatalogoProductos) {


        let div = document.createElement('div');

        div.className = 'contenedor-carritocliente';

        div.innerHTML = `
    <img class="row row-cols-1 row-cols-md-3 g-4 card h-100 tarjeta card-body card-img-top card-text card-footer " src=${element.img}>
    <h2>${element.titulo}</h2>
    <input class="talle-input" placeholder="Talle" type="number">
    <p>${element.precio}</p>
    <button id=${element.id} class="btn btn-danger agregarCarrito">Agregar al Carrito</button>`

        console.log(div);

        section.appendChild(div);



    }
});

const ListaCompras = [];
const buttons = document.getElementsByClassName('agregarCarrito');
console.log(ListaCompras);
const guardarLocal = (clave, valor) => {
    localStorage.setItem(clave, valor);


};

for (const button of buttons) {


    button.addEventListener('click', (event) => {
        const buttonClickeado = event.target;
        console.log(buttonClickeado.id);
        const itemPresionado = CatalogoProductos.find((id) => id.id === parseInt(buttonClickeado.id));
        localStorage.setItem('itemPresionado', JSON.stringify(itemPresionado));

        itemPresionado.agregado = true;

        console.log('Item agregado');

        ListaCompras.push(itemPresionado);


        for (const itemPresionado of ListaCompras) {
            $(".list-of-items").append(`<div class="contenedor-carrito-item card">
            <img class="imagenCarrito" src=${itemPresionado.img}
            <h4>${itemPresionado.titulo}</h4>
            <p class="precio">Precio: ${itemPresionado.precio}</p>
            <p class="precio">${itemPresionado.temporada}</p>
            <button  class="btn btn-danger btn-sm" id="btn1">Eliminar</button>


            </div>`)

            $("#btn1").click(() => {

                $(".contenedor-carrito-item").trigger("remove");
                console.log("#btn1");
            });


        }
    });
    guardarLocal(button.id, JSON.stringify(button));

};
const productos = JSON.parse(localStorage.getItem('lista'));


// $getJSON(jsonLocal, function(data, status) {
//     let misDatos = data;
//     pintarCards(misDatos);
// })

// const section = document.querySelector('.contenedor');

// function pintarCards(array) {

//     for (let element of array) {

//         let div = document.createElement('div');

//         div.className = 'card'

//         div.innerHTML = `
//         <img class="img-fluid center" src=${element.img}>
//         <h2>${element.titulo}</h2>
//         <p>$${element.precio}</p>
//         <button class="btn btn-danger">Agregar al carrito</button>
//         <button onclick="wsp('${element.titulo}',${element.precio})" class="btn btn-success">Consultar </button>`



//         section.appendChild(div);

//     }