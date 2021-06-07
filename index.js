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


const producto1 = new Producto("camiseta Cardinals", 2020, 3, true);
const producto2 = new Producto("camiseta Cardinals", 2020, 4, true);
const producto3 = new Producto("camiseta Cardinals", 2020, 2, false);
const producto4 = new Producto("camiseta Reconquista", 2019, 3, true);
const producto5 = new Producto("camiseta Reconquista", 2019, 4, true);
const producto6 = new Producto("camiseta Reconquista", 2019, 2, false);

console.log();
producto1.mostrar(Producto);