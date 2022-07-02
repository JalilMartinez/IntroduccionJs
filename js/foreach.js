const carrito =[
    {nombre: 'Monitor 20 Pugadas', precio: 500},
    {nombre: 'Tablet 5 Pugadas', precio: 200},
    {nombre: 'Smartphone 2 Pugadas', precio: 50},
    {nombre: 'Lavadora 50 Pulgadas', precio: 1000},
    {nombre: 'Refrigerador 2 Ton', precio: 1500}
];

//For each (solo puede ser utilizado en arreglos)(se usa mas que nada para enviar los datos a la consola, no para utilizar los datos y crear nuevo arreglo)

carrito.forEach(function(producto){
    console.log(producto);
})
carrito.forEach(function(producto){
    console.log(producto.nombre);
})
carrito.forEach(function(producto){
    console.log(producto.precio);
})
/*con arrow function*/
carrito.forEach(producto=>console.log(`${producto.nombre} y ${producto.precio}`))

//map(se recomienda por si se utilizaran los datos del arreglo para crear otro)
carrito.map(producto=>console.log(producto.nombre))

const varia = carrito.map(producto=>producto)

console.log(varia);
