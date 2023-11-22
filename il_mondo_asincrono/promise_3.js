/*Crea una semplice Promise che si risolve dopo un ritardo di 2 secondi.
Utilizzare setTimeout per simulare un'operazione asincrona.*/

const nome = "Marta";

const name = ["Marta"]; //for testing errors.
const nnome = {nome : "Marta"};//for testing errors.

function helloName(name) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (typeof name === "string" && name !== "") {
                resolve (`Hello ${name}!`)
            } else {
                reject("name must be a string. Empty strings are not accepted ");
            }
        }, 2000);
    })
}

helloName(nome).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});

//credo sia corretto.