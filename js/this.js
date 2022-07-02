//this

const reservacion = {
    nombre: 'Maza',
    apellido: 'Martinez',
    total: 500,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }

}

reservacion.informacion();