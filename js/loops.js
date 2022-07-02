//For loops
const n=10;

for(let v=0;v<=n;v++){
    console.log(v);
}

for(let v=0;v<=100;v++){
    if(v != 0){
        if(v % 2 == 0){
            console.log(`El numero ${v} es par`);
        }else{
            console.log(`El numero ${v} es impar`)
        }
    }   
}


const carrito =[
    {nombre: 'Monitor 20 Pugadas', precio: 500},
    {nombre: 'Tablet 5 Pugadas', precio: 200},
    {nombre: 'Smartphone 2 Pugadas', precio: 50},
    {nombre: 'Lavadora 50 Pulgadas', precio: 1000},
    {nombre: 'Refrigerador 2 Ton', precio: 1500}
];

for(let i=0; i < carrito.length;i++){
    console.log(carrito[i]);
}
//while loops (primero revisa la condicion y despues ejecuta el codigo)

let i=0;
while(i<5){
    console.log(`soy ${i}`);
    i++;

}
 i=0;
while(i<carrito.length){
    console.log(carrito[i]);
    i++;
}

//do while loop(ejecuta el codigo una vez y despues revisa la condicion)
let a=0;

do{
 console.log(a)
 a++
}while(a<5)