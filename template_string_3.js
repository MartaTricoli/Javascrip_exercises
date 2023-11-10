//Crea una template string che genera un messaggio di saluto con un nome e un messaggio personalizzato.

const name = "John";
const message = "Welcome to our website!";
const greeting = `Hello ${name}! ${message}`;
console.log(greeting);

//ho trovato questo modo per ottenere un input da terminale, è correto?

let userName = "";
const readline = require("readline"); 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Please, type your name here: ", answer => {
    userName = answer;
    console.log(`Hello ${userName}! ${message}`);
    rl.close();
});