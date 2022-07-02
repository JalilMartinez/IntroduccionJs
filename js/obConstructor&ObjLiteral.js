//POO

/* Las llaves lo hacen ser un objeto*/

    /* Object Literal*/
const producto ={
    nombre: "Tablet",
    precio: 500
}

// Object Constructor

function Producto(nombre, precio) {
    this.nombre=nombre;
    this.precio=precio;
}
//prototypes permite usar funciones que solo se utilizan en un objeto en especifico
Producto.prototype.formatearProducto= function(){
    return `${this.nombre} - ${this.precio}`;
}

const producto2 = new Producto('Monitor curvo',800);

console.log(producto2)



/*function formatearProducto(producto){
    return `${producto.nombre} - ${producto.precio}`;
}
console.log(formatearProducto(producto2));*/



console.log(producto2.formatearProducto());