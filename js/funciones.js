//Declaracion de Función

function sumar(){
    console.log(10 * 10);
}

sumar();

//Expresion de la función 

const sumar2 = function(){
    console.log(3 + 3);
}
sumar2();

//IIFE
//previene que no se puedan leer las variables desde otros archivos
(function() {
    console.log('Esto es una función')
})();