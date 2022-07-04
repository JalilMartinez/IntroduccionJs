// Para extraer datos de base de datos

async function obtenerEmpleados(){
    const archivo = 'empleados.json';//o url
    // fetch(archivo)
    //     .then( resultado => resultado.json())
    //     .then(datos =>{
    //         console.log(datos)
    //         const{empleados} = datos;
    //         // console.log(empleados);

    //         empleados.forEach(empleado => {
              
    //             console.log(empleado);
    //             console.log(empleado.id);
    //             console.log(empleado.nombre);
 
    //             document.querySelector('.contenido').textContent = empleado.nombre;
    //         });

    //     } );

    const resultado = await fetch(archivo);
    console.log(resultado);
    const datos = await resultado.json();
    console.log(datos);
    
}

obtenerEmpleados();