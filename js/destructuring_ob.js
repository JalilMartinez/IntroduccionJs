
const producto = {
    nombreProduccto: "Monitor 30 pulgadas",
    precio: 300,
    disponible: true
}

//Forma anterior
const precioProducto = producto.precio;
const nombreProducto = producto.nombreProduccto;

// console.log(precioProducto);
// console.log(nombreProducto);

//Destructuring

// const {precio} = producto;
// const {nombreProduccto} = nombreProducto;

// console.log(precio);
// console.log(nombreProducto);

//se puede colocar los que necesites en una sola linea 
const {precio, nombreProduccto} = producto;

console.log(precio);
console.log(nombreProducto);