function main() {
  const costoServicio = 500;
  let totalIngresado = 0;

  console.log("Bienvenido al sistema de pago de la pesa electrónica");
  console.log(`El costo del servicio es de ${costoServicio} pesos`);

  while (totalIngresado < costoServicio) {
    const tipoPago:string ="moneda o pago";
    let valor = 0;

    if (tipoPago === "moneda" || tipoPago === "billete") {
      const valor: number[] = [500, 1000, 2000, 5000];
      } else {
      console.log("Tipo de pago no válido.");
      continue;
    }

    if ([500, 1000, 2000, 5000].includes(valor)) {
      totalIngresado += valor;
    } else {
      console.log("Valor no válido.");
    }
  }

  if (totalIngresado < costoServicio) {
    console.log("Falta dinero para completar el pago");
  } else if (totalIngresado > costoServicio) {
    const cambio = totalIngresado - costoServicio;
    console.log(`Cambio a devolver: ${cambio} pesos`);
  } else {
    console.log("No se necesita devolver cambio");
  }

  console.log("¡Vuelve pronto!");
}

main();
