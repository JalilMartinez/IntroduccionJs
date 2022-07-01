const puntuaje = 10;

if(puntuaje == 1000) {
    console.log('Si, el puntuaje es 1000')
}
else{
    console.log('El puntuaje no es 1000')
}

const efectivo = 1000;
const carrito = 100;
if (efectivo > carrito){
    console.log('El usuario puede pagar')
} else{
    console.log('No puedes pagar mano')
}


const rol = 'ADMINISTRADOR';
 if(rol == 'ADMINISTRADOR'){
    console.log('acceso al sistema');
 } else if(rol == 'EDITOR'){
    console.log('Edita pero con cuidado bro');
 }else{
    console.log('No puedes editar nada mano');
 }