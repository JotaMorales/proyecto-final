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

const CatalogoProductos = [{
        id: 1,
        titulo: "Camiseta Cardinals",
        temporada: 2021,
        talle: 3,
        stock: true,
        precio: '$ 2199.00',
        img: "./img/cardinals.jpeg ",
    },
    {
        id: 2,
        titulo: "Camiseta Estrella",
        temporada: 2020,
        talle: 3,
        stock: true,
        precio: '$ 1899.00',
        img: "./img/estrella.jpeg "
    },
    {
        id: 3,
        titulo: "Camiseta Velocidad y Resistencia Vintage",
        temporada: 2019,
        talle: 3,
        stock: true,
        precio: '$ 2199.00',
        img: "./img/velocidad.jpeg "

    },
    {
        id: 4,
        titulo: "Camiseta Velocidad y Resistencia",
        temporada: 2020,
        talle: 3,
        stock: true,
        precio: '$ 1799.00',
        img: "./img/velocidad2.jpeg "
    }, {
        id: 5,
        titulo: "Camiseta Bahiense del Norte",
        temporada: 2021,
        talle: 3,
        stock: true,
        precio: '$ 2199.00',
        img: "./img/bdn.jpeg "
    }, {
        id: 6,
        titulo: "Camiseta Reconquista",
        temporada: 2020,
        talle: 3,
        stock: true,
        precio: '$ 1899.00',
        img: "./img/reconquista.jpeg "
    }, {
        id: 7,
        titulo: "Camiseta Fireballs",
        temporada: 2019,
        talle: 3,
        stock: true,
        precio: '$ 1799.00',
        img: "./img/Fireballs.jpg"
    }, {
        id: 8,
        titulo: "Camiseta Academia Muresull",
        temporada: 2019,
        talle: 3,
        stock: true,
        precio: '$ 1799.00',
        img: "./img/futbol1.jpeg "
    },
    {
        id: 9,
        titulo: "Camiseta Campus Navallo-Agullo",
        temporada: 2021,
        talle: 3,
        stock: true,
        precio: '$ 2199.00',
        img: "./img/FullSizeRender-1.jpg "
    }
];


const section = document.querySelector('.contenedor-catalogo');

console.log(section);

for (const element of CatalogoProductos) {

    let div = document.createElement('div');

    div.className = 'contenedor-carritocliente';
    div.innerHTML = `<div data-aos="flip-up">
    <img class="row row-cols-1 row-cols-md-3 g-4 card h-100 tarjeta card-body card-img-top card-text card-footer " src=${element.img}>
    <h2>${element.titulo}</h2>
    <input class="talle-input" placeholder="Talle" type="number">
    <p>${element.precio}</p>
    <button id=${element.id} class="btn btn-danger agregarCarrito">Agregar al Carrito</button>
    </div>`

    console.log(div);

    section.appendChild(div);

};


const ListaCompras = [];

const buttons = document.getElementsByClassName('agregarCarrito');

console.log(ListaCompras);
const guardarLocal = (clave, valor) => {
    localStorage.setItem(clave, valor);
    JSON.stringify(ListaCompras);
};

for (const button of buttons) {
    console.log('item agregado');


    button.addEventListener('click', (event) => {
        const buttonClickeado = event.target;
        console.log(buttonClickeado.id);
        const itemPresionado = CatalogoProductos.find((id) => id.id === parseInt(buttonClickeado.id));
        localStorage.setItem('itemPresionado', JSON.stringify(itemPresionado));
        itemPresionado.agregado = true;

        console.log('Item agregado');


        ListaCompras.push(buttonClickeado);
        ListaCompras.push(itemPresionado)
    });
    guardarLocal(button.id, JSON.stringify(button));
};


const productos = JSON.parse(localStorage.getItem('lista'));

const mostrarProductos = () => {
    for (const itemPresionados of ListaCompras) {
        $("#Carrito").append(`<div class="contenedor-carrito-item card">
            <img class="imagenCarrito" src=${itemPresionados.img}
            <h4>${itemPresionados.titulo}</h4>
            <p class="precio">Precio: ${itemPresionados.precio}</p>
            <p class="precio">${itemPresionados.temporada}</p>
            <button  class="btn btn-danger btn-sm" id="btn1">Eliminar</button>
            </div>`)

        $("#btn1").click(() => {

            $(".contenedor-carrito-item").trigger("remove");
            console.log("#btn1");
        });


    }
};
mostrarProductos();

// Variables
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');


// Listeners


function cargarEventListeners() {
    // Dispara cuando se presiona "Agregar Carrito"
    cursos.addEventListener('click', comprarCurso);
    // Cuando se elimina un curso del carrito
    carrito.addEventListener('click', eliminarCurso);
    // Al Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
    // Al cargar el documento, mostrar LocalStorage
    document.addEventListener('DOMContentLoaded', leerLocalStorage);
}
// cargarEventListeners();

// Funciones
// Función que añade el curso al carrito
function comprarCurso(e) {
    e.preventDefault();
    // Delegation para agregar-carrito
    if (e.target.classList.contains('agregar-carrito')) {
        const curso = e.target.parentElement.parentElement;
        // Enviamos el curso seleccionado para tomar sus datos
        leerDatosCurso(curso);
    }
}

// Lee los datos del curso
function leerDatosCurso(curso) {
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.discount').textContent,
        id: curso.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoCurso);
}

// Muestra el curso seleccionado en el Carrito
function insertarCarrito(curso) {
    const row = document.createElement('tr');
    row.innerHTML = `
  <td>
  <img src="${curso.imagen}" width=100>
  </td>
  <td>${curso.titulo}</td>
  <td>${curso.precio}</td>
  <td>
  <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
  </td>
  `;
    listaCursos.appendChild(row);
    guardarCursoLocalStorage(curso);
}

// Elimina el curso del carrito en el DOM
function eliminarCurso(e) {
    e.preventDefault();
    let curso,
        cursoId;
    if (e.target.classList.contains('borrar-curso')) {
        e.target.parentElement.parentElement.remove();
        curso = e.target.parentElement.parentElement;
        cursoId = curso.querySelector('a').getAttribute('data-id');
    }
    eliminarCursoLocalStorage(cursoId);
}

// Elimina los cursos del carrito en el DOM
function vaciarCarrito() {
    // forma lenta
    // listaCursos.innerHTML = '';
    // forma rapida (recomendada)
    while (listaCursos.firstChild) {
        listaCursos.removeChild(listaCursos.firstChild);
    }

    // Vaciar Local Storage
    vaciarLocalStorage();
    return false;
}

// Almacena cursos en el carrito a Local Storage
function guardarCursoLocalStorage(curso) {
    let cursos;
    // Toma el valor de un arreglo con datos de LS o vacio
    cursos = obtenerCursosLocalStorage();
    // el curso seleccionado se agrega al arreglo
    cursos.push(curso);
    localStorage.setItem('cursos', JSON.stringify(cursos));
}

// Comprueba que haya elementos en Local Storage
function obtenerCursosLocalStorage() {
    let cursosLS;
    // comprobamos si hay algo en localStorage
    if (localStorage.getItem('cursos') === null) {
        cursosLS = [];
    } else {
        cursosLS = JSON.parse(localStorage.getItem('cursos'));
    }
    return cursosLS;
}

// Imprime los cursos de Local Storage en el carrito
function leerLocalStorage() {
    let cursosLS;
    cursosLS = obtenerCursosLocalStorage();
    cursosLS.forEach(function(curso) {
        // constrir el template
        const row = document.createElement('tr');
        row.innerHTML = `
  <td>
  <img src="${curso.imagen}" width=100>
  </td>
  <td>${curso.titulo}</td>
  <td>${curso.precio}</td>
  <td>
  <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
  </td>
  `;
        listaCursos.appendChild(row);
    });
}

// Elimina el curso por el ID en Local Storage
function eliminarCursoLocalStorage(curso) {
    let cursosLS;
    // Obtenemos el arreglo de cursos
    cursosLS = obtenerCursosLocalStorage();
    // Iteramos comparando el ID del curso borrado con los del LS
    cursosLS.forEach(function(cursoLS, index) {
        if (cursoLS.id === curso) {
            cursosLS.splice(index, 1);
        }
    });
    // Añadimos el arreglo actual a storage
    localStorage.setItem('cursos', JSON.stringify(cursosLS));
}

// Elimina todos los cursos de Local Storage
function vaciarLocalStorage() {
    localStorage.clear();
}