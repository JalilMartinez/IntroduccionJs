//en declaracion de funcion no se puede usar arrow function 

//expresion de funcion
const sumar2 = function(n1,n2){
    console.log(n1 + n2);
}
sumar2(5,10);

//arrow functions

const sumar1 = (n1,n2) => console.log(n1 + n2);

sumar1(5,10);

const aprendiendo = tecnologia => {
    console.log(`Aprendiendo ${tecnologia}`)
}

aprendiendo("JavaScript");

//del codigo de otrosMetodosArrays
const meses = new Array('enero', 'febrero', 'marzo');//con constructor


const carrito =[
    {nombre: 'Monitor 20 Pugadas', precio: 500},
    {nombre: 'Tablet 5 Pugadas', precio: 200},
    {nombre: 'Smartphone 2 Pugadas', precio: 50},
    {nombre: 'Lavadora 50 Pulgadas', precio: 1000},
    {nombre: 'Refrigerador 2 Ton', precio: 1500}
];
// forEach
meses.forEach( mes => {
    if(mes == 'marzo'){
        console.log('marzo si existe');
    }
})

//Includes
 
let resultado = meses.includes('marzo');//lo de arriba pero usando un metodo
console.log(resultado);

// Some ideal para arreglo de objetos
resultado = carrito.some(producto => producto.nombre == 'Smartphone 2 Pugadas'//se elimina return porque queda implicito
);
console.log(resultado);

//.reduce
resultado = carrito.reduce((total, producto) => total + producto.precio,0);

//con arrow function
resultado = carrito.reduce((total, producto) => total + producto.precio,0);

console.log(resultado);

//Filter

resultado = carrito.filter(producto => producto.precio < 400 , 0);

//con arrow function
resultado = carrito.filter((producto) => producto.precio < 400,0);
console.log(resultado);