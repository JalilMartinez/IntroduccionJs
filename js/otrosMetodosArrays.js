// Array methods

const meses = new Array('enero', 'febrero', 'marzo');//con constructor

const carrito =[
    {nombre: 'Monitor 20 Pugadas', precio: 500},
    {nombre: 'Tablet 5 Pugadas', precio: 200},
    {nombre: 'Smartphone 2 Pugadas', precio: 50},
    {nombre: 'Lavadora 50 Pulgadas', precio: 1000},
    {nombre: 'Refrigerador 2 Ton', precio: 1500}
];
// forEach
meses.forEach(function(mes){
    if(mes == 'marzo'){
        console.log('marzo si existe');
    }
})

//Includes
 
let resultado = meses.includes('marzo');//lo de arriba pero usando un metodo
console.log(resultado);

// Some ideal para arreglo de objetos
resultado = carrito.some(function(producto){
    return producto.nombre == 'Smartphone 2 Pugadas'
});
console.log(resultado);

//.reduce
resultado = carrito.reduce(function(total, producto){
    return total + producto.precio;
},0)

//con arrow function
resultado = carrito.reduce((total, producto) => total + producto.precio,0);

console.log(resultado);

//Filter

resultado = carrito.filter(function(producto){
    return producto.precio < 400;
},0)

