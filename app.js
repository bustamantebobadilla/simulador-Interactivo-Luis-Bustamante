
/*Servicios ofrecidos*/
let eleccion = prompt ("Ingrese servicio de interes: 1. Clases Personalizadas, 2. Regularización, 3. Español para extranjeros,4. Grupos de conversación ");

/*condicion*/
if (eleccion <= parseInt(4) && (eleccion =="ESC" || eleccion == "esc")) {
    let solicitud = prompt ("Ingrese la cantidad de sesiones");
    alert ("Su total es:", {resultado});

    /*Costo por sesion*/
    let costo = 200;
/*total a pagar*/
    function total (costo, solicitud){
    return (costo*solicitud);
    }
    let resultado = total (costo, parseInt (solicitud))
/*salir*/
}else {
    eleccion = prompt ("introdusca ESC para salir");
}


