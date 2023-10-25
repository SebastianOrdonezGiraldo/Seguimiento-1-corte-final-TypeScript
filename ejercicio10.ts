let puntajeTotal:number = 5;

for (let i = 1; i <= 5; i++) {
    let pregunta = "b";
    let respuestaCorrecta = "b";

    switch (i) {
        case 1:
            console.log("¿🥐Cuál es la capital de Francia🥐?A) Madrid B) París C) Roma");
            const respuestaCorrecta1:string = "B";
            break;
        case 2:
            console.log("¿💻En qué año se fundó Microsoft💻?\nA) 1975\nB) 1985\nC) 1995");
            const respuestaCorrecta2:string = "A";
            break;
        case 3:
            console.log("¿🌎La Tierra es plana🌎?\nA) Verdadero\nB) Falso");
            const respuestaCorrecta3:string = "B";
            break;
        case 4:
            console.log("¿Cuál es el símbolo químico del oro?\nA) Ag\nB) Au\nC) Fe");
            const respuestaCorrecta4:string = "B";
            break;
        case 5:
            console.log("📚S¿Quién escribió 'Romeo y Julieta📚'?\nA) William Shakespeare\nB) Charles Dickens\nC) Jane Austen");
            const respuestaCorrecta5:string = "A";
            break;
    }

    let respuestaUsuario = "B";
    let respuestaCorrecta2 = "B";
    
    if (respuestaUsuario === respuestaCorrecta) {
        console.log("Respuesta correcta");
    } else {
        console.log("Respuesta incorrecta");
    }
}


console.log(`Resultados del examen:\nRespuestas correctas: ${puntajeTotal / 10}\nPuntaje total: ${puntajeTotal}`);
