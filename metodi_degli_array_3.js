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

//non ho trovato un modo più conciso per farlo con forEach. 
//ho utilizzato join() perchè dalla consegna mi è sembrato che volessero il risultato in questo modo.
//si sarebbe potuto fare molto più rapidamente con map: console.log(fruits.map(fruit => fruit + "!").join(" ")));