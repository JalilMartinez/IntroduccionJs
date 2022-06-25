"use strict";//correr javaScript en modo escrito
const producto = {
    nombreProduccto: "Monitor 30 pulgadas",
    precio: 300,
    disponible: true
}

Object.freeze(producto);//para que el objeto sea constante(no se agregen nuevas ni se eliminen propiedades en el ojeto)
Object.seal(producto);//para que el objeto sea constante(permite moificar propiedades existentes)

// producto.imagen = 'imagen.jpg';

console.log(Object.isFrozen(producto));

console.log(producto);