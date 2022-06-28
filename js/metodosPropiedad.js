
//Metodos de propiedad
const reproductor = {
    reproducir : function(id) {

        console.log(`Reproduciendo Canción con el ID: ${id}`);
    },
    pausa : function(){
        console.log(`Pausando...`)
    },
    crearPlaylist : function(nombre){
        console.log(`Creando PlayList : ${nombre}`)
    }
}

reproductor.borrarCancion = function(id){
    console.log(`Eliminando la cancion ID : ${id}`);
}

console.log(reproductor);
reproductor.reproducir(3840);
reproductor.pausa();
reproductor.borrarCancion(1548);
reproductor.crearPlaylist(`Maza`);