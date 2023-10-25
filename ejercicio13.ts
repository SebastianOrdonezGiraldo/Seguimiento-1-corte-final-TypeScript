console.log("Bienvenido a VenXtucarro - Concesionario de Carros");

function obtenerMarca(): string {
    const marcaIngresada: string = "Mazda"; 
    return marcaIngresada;
}

function obtenerReferencia(marca: string): string {
    const referencias: { [key: string]: string[] } = {
        "Chevrolet": ["Captiva", "Tracker"],
        "Mazda": ["Modelo A", "Modelo B"],
        "Renault": ["Referencia X", "Referencia Y"],
    };

    const referenciasDisponibles = referencias[marca];
    console.log(`Seleccione una referencia para ${marca}: ${referenciasDisponibles.join(" / ")}`);
    
   
    return ""; 
}

function mostrarInformacion(referencia: string): void {
    console.log(`Información de la referencia seleccionada: ${referencia}`);

  
}

const marcaIngresada = obtenerMarca();
const referenciaIngresada = obtenerReferencia(marcaIngresada);

mostrarInformacion(referenciaIngresada);
