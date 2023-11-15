/*mplementa la funzione lanciaDadi che:
1.Generi casualmente due numeri tra 1 e 6 per rappresentare il lancio di due dadi.
2.Visualizzi in console il risultato del lancio Lancio dei dadi: Dado 1 = ${dado1}, Dado 2 = ${dado2}.
3.Utilizzi il metodo setTimeout per ritardare l' esecuzione della funzione "lanciaDadi" di 2 secondi.
4.Prima dello scadere dei 2 secondi stampa in console il messaggio "Lancio dei dadi in corso..." */

function lanciaDadi (min, max) {
    if (typeof min !== "number" || typeof max !== "number") {
        throw new Error("min and max must be valid numbers");
    }
    setTimeout(() => {
        console.log("Lancio dei dai in corso...");
    }, 1000);
    setTimeout(() => {
        console.log(`Lancio dei dadi: Dado 1 = ${Math.floor(Math.random() * (max - min +1) + 1)}, Dado 2 = ${Math.floor(Math.random() * (max - min + 1) + min)}`) ;
    }, 2000);
}

lanciaDadi(1, 6);




