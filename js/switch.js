const metodoPago = 'Bitcoin';

switch(metodoPago){
    case 'tarjeta': console.log('Pagaste con tarjeta');
        break;
    case 'Bitcoin': console.log('Uy mano, anadas rico');
        break;
    default: console.log('Aun no has pagado')
    break;
}
