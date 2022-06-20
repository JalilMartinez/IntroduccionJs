// Objetos

//Variables simples
const nombreProducto = "Monitor 20 Pulgadas";
const precio = 300;
const disponible = true;

//Variables dentro de un objeto
const producto = {
    nombreProduccto: "Monitor 30 pulgadas",
    precio: 300,
    disponible: true
}

console.log(producto);
console.log(producto.precio);
console.log(producto.nombreProduccto);

console.log(producto["precio"]);/*otra forma de acceder a los datos del objeto*/