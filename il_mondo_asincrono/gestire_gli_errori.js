/*Partendo dall'esercizio Le Callback - 5, includi la gestione degli errori. Se la funzione di callback genera un errore, catturalo e gestiscilo.
Modificare la funzione performOperation per gestire l'errore e registrare un messaggio di errore.*/

function performOperation(a, b, callback) {
    if (typeof callback !== "function") {
        throw new Error("callback must be a function");
    }

    if (typeof a !== "number" || typeof b !== "number" || isNaN(a) || isNaN(b)) {
        callback(new Error("not a number", null));
    } else {
        callback(null, a + b);
    }
}
  
function displayResult(error, result) {
    if (error) {
        console.log(error);
    } else if (result) {
        console.log(result);
    }
}
  
performOperation(5, 3, displayResult);

//esercizio svolto in pair con Ilyasse Laraaj