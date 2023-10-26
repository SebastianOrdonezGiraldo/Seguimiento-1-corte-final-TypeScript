let n1: number = 40000;
let costoApartamento: number = 100000;

if (n1 === 40000 || isNaN(n1)) {
  console.log(n1);
  let tipoInmueble: number = 2;

  let comisionInmobiliaria: number = 0;

  while (true) {
    if (tipoInmueble === 1 || tipoInmueble === 2) {
      break;
    } else {
      console.log("Opción inválida. Por favor, ingrese 1 o 2.");
    }
  }

  let valorPropietario: number;
  let valorInmobiliaria: number;

  if (tipoInmueble === 1) {
    comisionInmobiliaria = 0.1 * costoApartamento;
  } else if (tipoInmueble === 2) {
    comisionInmobiliaria = 0.2 * costoApartamento;
  }

  valorPropietario = costoApartamento - comisionInmobiliaria;
  valorInmobiliaria = comisionInmobiliaria;

  console.log(`Resultados:
Valor que recibe el propietario: $${valorPropietario.toFixed(2)}
Valor recibido por la inmobiliaria: $${valorInmobiliaria.toFixed(2)}`);

  console.log("¡Gracias por utilizar nuestro servicio!");
}
