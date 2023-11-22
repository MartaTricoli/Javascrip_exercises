/*Riscrivi la funzione fetchDataFromAPI dell'esercizio Le Callback - 6 utilizzando Promises per una migliore gestione degli errori.
La promise dovrebbe risolversi con i dati e rifiutare con un messaggio di errore.*/
//const user = "string"
const user = { name: "John", age: 30}; 

function fetchDataFromAPI(obj) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof obj === "object" && !Array.isArray(obj)) {
                resolve ("obj is a valid object");
            } else {
                reject ("obj must be a valid object");
            }
        }, 2000);
    });    
}

fetchDataFromAPI(user).then(() => {
    const date = new Date();
    let thisYear = date.getFullYear();
    console.log(`user first name is ${user.name}, born in ${thisYear - user.age}.`);
}).catch((error) => {
    console.log(error);
});

//non sono sicura, ma così funziona e mi stampa l'errore se non gli passo un oggetto. Diciamo che va bene così.


