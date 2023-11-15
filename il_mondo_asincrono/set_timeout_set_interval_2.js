/*1.Crea una funzione chiamata "contoAllaRovescia" che diminuirà il conto alla rovescia di 1 unità e visualizzerà il tempo rimanente in console.
2. Utilizza setInterval per chiamare la funzione contoAllaRovescia ogni secondo.
3. Visualizza il messaggio "Conto alla rovescia in corso..." all'inizio.
4. Quando il conto alla rovescia raggiunge 0, visualizza un messaggio che indica che il conto alla rovescia è terminato. */

let tempoRimanente = 10;

function contoAllaRovescia(number) {
    if (typeof number !== "number") {
        throw new Error("number must be a valid number!");
    }
    console.log("conto alla rovescia in corso...");
    console.log(number);
    const id = setInterval (() => {
        console.log(number - 1);
        number--;
    }, 1000);
    
    setTimeout(()=> {
        console.log("conto alla rovescia terminato");
        clearInterval(id);
    }, 10000);
}
contoAllaRovescia(tempoRimanente);