let n1: number =30000;

if (n1 === null || isNaN(n1)) {
  console.log(n1);
  let tipoInmueble: number;

  // Solicitar al usuario que ingrese el tipo de inmueble (1 para Usado, 2 para Nuevo)
  while (true) {
    tipoInmueble = parseInt(prompt("Escoja el tipo de inmueble:\n1. Usado\n2. Nuevo"));

    if (tipoInmueble === 1 || tipoInmueble === 2) {
      break;
    } else {
      alert("Opción inválida. Por favor, ingrese 1 o 2.");
    }
  }

  let comisionInmobiliaria: number;
  let valorPropietario: number;
  let valorInmobiliaria: number;

  // Calcular comisión de la inmobiliaria y otros valores
  if (tipoInmueble === 1) {
    comisionInmobiliaria = 0.1 * costoApartamento; // 10% de comisión para inmuebles usados
  } else if (tipoInmueble === 2) {
    comisionInmobiliaria = 0.2 * costoApartamento; // 20% de comisión para inmuebles nuevos
  }

  valorPropietario = costoApartamento - comisionInmobiliaria;
  valorInmobiliaria = comisionInmobiliaria;

  // Mostrar los resultados al usuario
  alert(`Resultados:
Valor que recibe el propietario: $${valorPropietario.toFixed(2)}
Valor recibido por la inmobiliaria: $${valorInmobiliaria.toFixed(2)}`);

  // Mensaje de despedida
  alert("¡Gracias por utilizar nuestro servicio!");

  // Fin del programa
}
