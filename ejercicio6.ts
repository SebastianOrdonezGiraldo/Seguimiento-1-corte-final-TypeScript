function calcularCostoPedido(opcion: number, cantidad: number, agregarSalsa: boolean): number {
    let costo = 0;
  
    if (opcion === 1) {
     
      costo = cantidad * 7000;
    } else if (opcion === 2) {
      
      costo = cantidad * 5000;
    } else if (opcion === 3) {
      
      costo = cantidad * 15000;
    } else {
      console.log("Opción no válida.");
      return 0;
    }
  
    if (agregarSalsa) {
      costo += 500;
    }
  
    return costo;
  }
  
  function main() {
    console.log("Bienvenido a Italiana Pizza");
    console.log("Menú de opciones:");
    console.log("1. Pizza ($7000 por unidad)");
    console.log("2. Sándwiches ($5000 por unidad)");
    console.log("3. Ensaladas ($15000 por unidad)");
  

  }
