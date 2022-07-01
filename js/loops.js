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
//while loops


//do while loop