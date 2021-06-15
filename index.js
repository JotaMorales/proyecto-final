let respuesta = prompt('Llego el HOT SALE!, encontraste lo que buscabas?');
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


let totalIngresado = parseInt(prompt('¿Cual es el valor del producto?'));
let cuotasIngresados = parseInt(prompt('¿Cuantas cuotas quieres?'));
alert('El valor de cada cuota es $' + (cuotas(totalIngresado, cuotasIngresados)).toFixed(2));

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
console.log(off);





producto12.agregar(Producto);

ArrayProductos.sort(function(a, b) {
    return a.precio - b.precio
})