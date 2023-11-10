//Utilizza il metodo forEach che prende un array di nomi di frutta e li stampa aggiungendo un punto esclamativo a ciascun nome di frutta.

const fruits = ["Mela", "Banana", "Kiwi", "Fragola"];

function newFruits (array) {
    if (!Array.isArray(array)) {
        throw new Error("array must be a valid array");
    }
    let newArray = [];
    array.forEach(fruit => {
        newArray.push(fruit + "!");
    })
    return newArray;
}
console.log(newFruits(fruits).join(" "));


//si sarebbe potuto ottenere un risultato simile con fruits.forEach(fruit => console.log(fruit + "!")), ma dal suggerimento mi sembrava che li volessero tutti sulla stessa riga, stampati uno dopo l'altro.

//si sarebbe potuto fare molto più rapidamente con map: console.log(fruits.map(fruit => fruit + "!").join(" ")));