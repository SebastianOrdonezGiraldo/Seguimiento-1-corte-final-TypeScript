let votosAnaMaria:number = 0; 
let votosDiego:number = 0;    

for (let i = 1; i <= 10; i++) {
    let opcion:number = 3;

    if (opcion === 1) {
        votosAnaMaria++;
    } else if (opcion === 2) {
        votosDiego++;
    }
}


if (votosAnaMaria > votosDiego) {
    console.log("🎉El ganador es Ana Maria Suarez🥳");
} else if (votosDiego > votosAnaMaria) {
    console.log("🎉El ganador es Diego Acero🥳");
} else {
    console.log("La votación terminó en empate");
}

console.log(`Resultados:\nAna Maria Suarez: ${votosAnaMaria} votos\nDiego Acero: ${votosDiego} votos`);
