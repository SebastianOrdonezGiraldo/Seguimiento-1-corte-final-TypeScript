console.log("😀😀¡Bienvenido a stickerland!😀😀");

var costoUnitario: number | undefined;
var tamañoStickers: number = 2; 

switch (tamañoStickers) {
    case 1:
        costoUnitario = 4000;
        break;
    case 2:
        costoUnitario = 6000;
        break;
    default:
        console.log("Opción inválida❌. Seleccione 1 para stickers pequeños o 2 para stickers grandes.");
        break;
}

if (costoUnitario !== undefined) {
    var cantidadStickers: number = 6; 
    if (cantidadStickers >= 2) {
        var costoTotal = costoUnitario * cantidadStickers;
        console.log("El costo total de su compra es: $" + costoTotal);
    } else {
        console.log("La cantidad mínima permitida es 10. Por favor, ingrese un número correcto.");
    }
}
