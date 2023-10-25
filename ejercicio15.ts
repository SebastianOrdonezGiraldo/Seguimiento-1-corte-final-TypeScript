function generarSalida(filas: number, columnas: number): string {
    let resultado = "";
  
    for (let i = 1; i <= filas; i++) {
      for (let j = 1; j <= columnas; j++) {
        resultado += "* ";
      }
      resultado += "= ".repeat(columnas) + "\n";
    }
  
    resultado += "= ".repeat(columnas * 2);
  
    return resultado;
  }
  
  const filas = 5;
  const columnas = 5;
  
  const salida = generarSalida(filas, columnas);
  console.log(salida);
  