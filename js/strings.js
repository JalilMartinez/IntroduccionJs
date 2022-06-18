//String o cadenas de texto

const tweet = 'Aprendiendo JavaScript con el curso de Desarrollo Web Completo'
const producto0 = "Monitor de 10\"";
const producto = "Monitor de 20 Pulgadas";//mas usada
const producto2 = String('Monitor de 30 pulgadas');
const producto3 = new String('Monitor de 50 pulgadas');


console.log(producto0);
console.log(producto);
console.log(typeof producto2);//typeof para saber el tipo de variable o constante
console.log(producto3);

//Metodos
console.log(producto.length);
//IndexOf(para buscar algo en el string)
console.log(tweet.indexOf('JavaScript'));
console.log(producto2.indexOf('JavaScript'));/* -1 es porque no pudo encontrarlo*/


//Includes (retorna true o false)
console.log(tweet.includes('JavaScript'));
console.log(producto2.includes('JavaScript'));/* -1 es porque no pudo encontrarlo*/

