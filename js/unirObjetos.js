"use strict";//correr javaScript en modo escrito
const producto = {
    nombreProduccto: "Monitor 30 pulgadas",
    precio: 300,
    disponible: true
}

const medidas ={
    peso: '1kg',
    medida: '1m'
}

const nuevoProducto = {...producto, ...medidas};//unirlos para no mutar datos originales

console.log(producto);
console.log(nuevoProducto);