//Arrays

const numeros=[10,20,30,40,50];
console.log(numeros);
console.table(numeros);

const meses = new Array('enero', 'febrero', 'marzo');//con constructor
console.log(meses);

const arreglo =["Hola", 10, true, null, {nombre: "mazatl", trabajo: "programador"}, [1,2,3]];
console.log(arreglo);

//acceder valores de un objeto

console.log(numeros[1]);

//conocer extensión de un arreglo
console.log(meses.length);

numeros.forEach(function(numero){
    console.log(numero);
})

//agregar elemento al final de un arreglo
numeros[5]= 5;
console.table(numeros);

numeros.push(100,200);
console.table(numeros);

//agrega al inicio de arreglo
numeros.unshift(-10,-20,-30);
console.table(numeros);

numeros.pop();//elimina ultimo elemento del arreglo
console.table(numeros);