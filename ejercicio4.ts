console.log("¡Bienvenido a Lavanservis!");

var direccion:string = "cr 18 #70-12";
var servicio:number = 2 ;
var tipoLavado;
var cantidadPrendas:number = 2;
var costoTotal;

switch (servicio) {
    case 1:
        tipoLavado =2;
        switch (tipoLavado) {
            case 1:
                costoTotal = cantidadPrendas * 4000;
                break;
            case 2:
                costoTotal = cantidadPrendas * 3000;
                break;
            default:
                console.log("Opción inválida.");
                break;
        }
        break;
    case 2:
        costoTotal = cantidadPrendas * 2000 + 4000;
        break;
    default:
        console.log("Opción inválida.");
        break;
}

if (costoTotal) {
    console.log("El costo total es: $" + costoTotal);
    console.log("Su pedido será recogido en la dirección: " + direccion);
} else {
    console.log("Operación cancelada.");
}



