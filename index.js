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
alert('El valor de cada cuota es $' + (cuotas(totalIngresado, cuotasIngresados)).toFixed(3));

class Producto {
    constructor(marca, temporada, talle, stock) {
        this.marca = marca;
        this.temporada = temporada;
        this.talle = talle;
        this.stock = stock;
    }
    mostrar() {
        for (const producto in this) {
            console.log(producto + ": " + this[producto]);
        }
    }
}
alert(prompt('Ingresa el nombre de tu producto'));


const producto1 = new Producto("camiseta Cardinals", 2021, 3, true);
const producto2 = new Producto("camiseta Cardinals", 2021, 4, true);
const producto3 = new Producto("camiseta Cardinals", 2021, 2, false);
const producto4 = new Producto("camiseta Estrella", 2020, 3, true);
const producto5 = new Producto("camiseta Estrella", 2020, 4, true);
const producto6 = new Producto("camiseta Estrella", 2020, 2, false);
const producto7 = new Producto("camiseta Velocidad y Resistencia", 2020, 3, true);
const producto8 = new Producto("camiseta Velocidad y Resistencia", 2020, 4, true);
const producto9 = new Producto("camiseta Velocidad y Resistencia", 2020, 2, false);
const producto10 = new Producto("camiseta Velocidad y Resistencia Vintage", 2019, 3, true);
const producto11 = new Producto("camiseta Velocidad y Resistencia Vintage", 2019, 4, true);
const producto12 = new Producto("camiseta Velocidad y Resistencia Vintage", 2019, 2, false);
const producto13 = new Producto("camiseta Bahiense del Norte", 2021, 3, true);
const producto14 = new Producto("camiseta Bahiense del Norte", 2021, 4, true);
const producto15 = new Producto("camiseta Bahiense del Norte", 2021, 2, false);
const producto16 = new Producto("camiseta Reconquista", 2020, 3, true);
const producto17 = new Producto("camiseta Reconquista", 2020, 4, true);
const producto18 = new Producto("camiseta Reconquista", 2020, 2, false);
const producto19 = new Producto("camiseta Fireballs", 2019, 3, true);
const producto20 = new Producto("camiseta Fireballs", 2019, 4, true);
const producto21 = new Producto("camiseta Fireballs", 2019, 2, false);
const producto22 = new Producto("camiseta Academia Muresull", 2019, 3, true);
const producto23 = new Producto("camiseta Academia Muresull", 2019, 4, true);
const producto24 = new Producto("camiseta Academia Muresull", 2019, 2, false);
const producto25 = new Producto("camiseta Campus Navallo-Agullo", 2021, 3, true);
const producto26 = new Producto("camiseta Campus Navallo-Agullo", 2021, 4, true);
const producto27 = new Producto("camiseta Campus Navallo-Agullo", 2021, 2, false);

console.log(Producto);
producto1.mostrar(Producto);