// Async / Await

function descargarNuevosClientes(){
    return new Promise(resolve => {
        console.log('Descargando clientes... espere...');

        setTimeout(()=>resolve('Los clientes fueron descargados'), 5000);
    });
}

function descargarNuevoPedido(){
    return new Promise(resolve => {
        console.log('Descargando pedido... espere...');

        setTimeout(()=>resolve('Los pedidos fueron descargados'), 3000);
    });
}

async function app(){
    try {
        // const clientes = await descargarNuevosClientes();
        // const pedido = await descargarNuevoPedido();
        // console.log('app lista', clientes);
        // console.log('app lista', pedido);
        const resustado = await Promise.all([descargarNuevosClientes(), descargarNuevoPedido()]);
        console.log('app lista', resustado[0]);
        console.log('app lista', resustado[1]);
    } catch (error) {
        console.log(error);
    }
    
}

app();

console.log('Este codigo no se bloquea');
// setInterval(function(){
//     console.log('set timeout...');
// }, 1000)

// setTimeout(function(){
//     console.log('set timeout...');
// }, 5000)