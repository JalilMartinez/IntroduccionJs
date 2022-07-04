const usuarioIdentificado = new Promise((resolve, reject)=>{
    const auth = true;
    if(auth){
        resolve('Bienvenido');//El promise se cumple
    }else{
        reject('No se pudo iniciar sesión');//El promise no se cumple
    }
});

console.log(usuarioIdentificado);