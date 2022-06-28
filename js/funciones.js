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

/*
    Esto pasa porque javaScript se ejecuta en 2 vueltas (a esto se le llama hosting)
      - La primer vuelta se le llama de creacion y la segunda de ejecución   
      - En la primera vuelta se registran las funciones y en la segunda vuelta se registra lo demas
      - La segunda no funciona asi porque no esta declarada con una sintaxis de function
  
*/ 


//IIFE  se manda a llamar sola
//previene que no se puedan leer las variables desde otros archivos
(function() {
    console.log('Esto es una función')
})();


//Funciones con parametros y argumentos


function sumax(numero_1, numero_2){
    console.log(numero_1 + numero_2);
}
sumax(20,50);// aqui es donde van los argumentos
sumax(2);// como solo mandamos un valor el resultado sera nan
sumax(8,6);// aqui es donde van los argumentos

function sumaw(numero_1 = 0, numero_2 = 0){//se le agregan valores por default a los parametros 
    console.log(numero_1 + numero_2);
}
sumaw(20);// aqui es donde van los argumentos

const sumary = function(numero_1, numero_2){
    console.log(numero_1 + numero_2);
}
sumary(5,10);

