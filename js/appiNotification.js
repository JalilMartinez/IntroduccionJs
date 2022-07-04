const boton = document.querySelector('#boton');

boton.addEventListener('click', function(){
    Notification.requestPermission()
        .then(resustado => console.log('El resdultado es : ', resustado));
});


if(Notification.permission == 'granted'){
    new Notification('Mamaste mano :D',{
        icon: '../img/276222276_441601257741569_1895817578147303225_n.jpg',
        body: 'Maza te esta hackeando'
    });
} else{
    new Notification('Chale mano xd')
}