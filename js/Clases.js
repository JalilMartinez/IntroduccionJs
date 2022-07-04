//Clases

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto (){
        return `${this.nombre} - ${this.precio}`;
    }
    retornaPrecio(){
        return this.precio;
    }
}

const producto2 = new Producto('Monitor curvo',800);

console.log(producto2)
console.log(producto2.retornaPrecio());

// Herencia

class Libro extends Producto{
    constructor(nombre, precio, isbn){
        super(nombre, precio);//para heredar constructor de Producto
        this.isbn = isbn;
    }
    formatearProducto (){
        return `${super.formatearProducto()}- ${this.isbn}`;
    }
}

const libro = new Libro('Js La Revolución',800, 3465048613561);

console.log(libro);
console.log(libro.formatearProducto());
console.log(libro.retornaPrecio());