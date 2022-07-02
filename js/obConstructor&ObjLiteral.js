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

const producto2 = new Producto('Monitor curvo',800);

console.log(producto2)