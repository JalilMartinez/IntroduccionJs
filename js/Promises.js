const usuarioIdentificado = new Promise((resolve, reject)=>{
    const auth = true;
    if(auth){
        resolve('Bienvenido');//El promise se cumple
    }else{
        reject('No se pudo iniciar sesión');//El promise no se cumple
    }
});

usuarioIdentificado
    .then( resultado => console.log(resultado))
    .catch(resultado => console.log(resultado))

//En los Promises existenm 3 valores
// Pending : No se ha cumplido pero tampoco se ha rechazado 
// fulfilled : ya se cumplido
// Rejected : se ha rechazado o no se puede cumplr