console.log("📚Bienvenido a la biblioteca municipal de Armenia📚");

let CostoRetrasoRevista: number = 500;
let CostoRetrasoLibro: number = 600;
let CostoPerdida: number = 10000;

console.log("Eliga el motivo de su consulta:\n1 Devolución");

const motivo: number = 1

if (motivo === 1) {
    const diasRetraso: number =2;
    const revistasPrestadas: number =5;
    const librosPrestados: number = 2 ;

    const costoTotal: number = (CostoRetrasoRevista * diasRetraso * revistasPrestadas) + (CostoRetrasoLibro * diasRetraso * librosPrestados);

    console.log(`El costo total es: $${costoTotal}`);

    console.log(`El monto total de la multa a pagar es: $${costoTotal}`);
} else {
    console.log("Motivo no válido.");
}
