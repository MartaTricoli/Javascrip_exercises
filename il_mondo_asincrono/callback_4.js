/*Crea una funzione chiamata runCallbacks che accetta un array di funzioni di callback come argomento.
La funzione dovrebbe eseguire ogni callback nell'ordine in cui appaiono nell'array.*/

function runCallbacks(callbacks) {
    if (!Array.isArray(callbacks) || callbacks.filter(callback => typeof callback !== "function").length !== 0) {
        throw new Error("callbacks must be a valid array. callbacks must contain only functions.")
    }
    
    callbacks.forEach(callback => callback());
}

function firstCallback() {
   console.log("first callback");
}

function secondCallback() {
    console.log("second callback");
}
  
function thirdCallback() {
    console.log("third callback");
}
const callbackArray = [firstCallback, secondCallback, thirdCallback];
runCallbacks(callbackArray);