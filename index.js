function muestraPrecio(){
    var tipoSeguro = document.getElementById("tipoSeguro").value;
    var alertPrecio = document.getElementById('alertPrecio');
    var precio;
    switch(tipoSeguro){
        case '1':
            precio = 500;
            break;
        case '2':
            precio = 1000;
            break;
        case '3':
            precio = 1500;
            break;
        default:
            precio = 0;
            break;
    }
    if(precio > 0){
        alertPrecio.innerHTML = '$ ' + precio;
        alertPrecio.style.display = '';
    }else{
        alertPrecio.style.display = 'none';
    }
    
}