/*Scrivi una funzione chiamata doubleArray che accetta un array e una funzione di callback come argomenti.
doubleArray deve applicare la funzione di callback a ciascun elemento dell'array e restituire un nuovo array con i valori trasformati.*/

function doubleArray(arr, callback) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error("arr must be a valid, not empty array!");
    }
    
    if (typeof callback !== "function") {
        throw new Error("callback must ba a valid function");
    }

    return arr.map(element => callback(element));
}

function doubleValue(num) {
    return num * 2;
}

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = doubleArray(numbers, doubleValue);
console.log(doubledNumbers); // Should output [2, 4, 6, 8, 10]