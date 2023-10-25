interface Equipo {
  nombre: string;
  puntos: number;
}

const calcularPuntos = (resultado: string) => resultado === "victoria" ? 3 : resultado === "empate" ? 1 : 0;

const equipos: Equipo[] = [];

for (let i = 1; i <= 3; i++) {
  const nombre = prompt(`Nombre del equipo ${i}:`);
  let puntos = 0;

  for (let j = 1; j <= 3; j++) {
    const resultado = prompt(`Resultado del partido ${j} para ${nombre} (victoria/empate/derrota):`);
    puntos += calcularPuntos(resultado);
  }

  equipos.push({ nombre, puntos });
}

equipos.sort((a, b) => b.puntos - a.puntos);

console.log("Ranking de equipos:");
equipos.forEach((equipo, index) => {
  console.log(`${index + 1}. ${equipo.nombre}: ${equipo.puntos} puntos`);
});
