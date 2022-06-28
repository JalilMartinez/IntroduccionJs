//Declaracion de Función
sumar();
function sumar(){
    console.log(10 * 10);
}



//Expresion de la función 
const sumar2 = function(){
    console.log(3 + 3);
}
sumar2();

//la diferencia entre la declaracion y la expresion es que, en la primera aunque se mande
//a llamar antes funciona, en la expresion no sirve y se debe llamar despues de la funcion

//IIFE  se manda a llamar sola
//previene que no se puedan leer las variables desde otros archivos
(function() {
    console.log('Esto es una función')
})();