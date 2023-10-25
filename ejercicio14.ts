const n: number= 3;

if (!isNaN(n)) {
  console.log(`Tabla de multiplicar del ${n}:`);
  for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
    const resultado = n * multiplicador;
    console.log(`${n} x ${multiplicador} = ${resultado}`);
  }
} else {
  console.log("Por favor, ingrese un número válido.");
}

