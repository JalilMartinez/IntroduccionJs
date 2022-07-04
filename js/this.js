//this

const reservacion = {
    nombre: 'Maza',
    apellido: 'Martinez',
    total: 500,
    pagado: false,
    //aqui no se puede usar arrow function porque el arrow function hace referencia al entorno golobal(daria un undefinded)
    informacion: function(){//This hace referencia al objeto en el cual se esta mandando a llamar la funcion (reservacion.)
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }

}

reservacion.informacion();