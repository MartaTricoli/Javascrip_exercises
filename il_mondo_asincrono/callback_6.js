/*Dato l'oggetto { name: "John", age: 30 } crea una funzione che simula un'operazione asincrona, come il recupero dei dati da un'API.
Implementare una callback per gestire i dati recuperati.
Utilizzare setTimeout per simulare il ritardo dell'operazione.*/

const user = { name: "John", age: 30}; 

function fetchDataFromAPI(obj, callback) {
    if (typeof callback !== "function") {
        throw new Error("callback must be a function");
    }

    setTimeout( () => {
        callback(obj);
    }, 2000);
}
  
function handleData(data) {
    if (typeof data !== "object" || Array.isArray(data)) {
        throw new Error("data must be an object: {property: value}. Array not accepted.")
    }
    const date = new Date();
    let thisYear = date.getFullYear();
    console.log(`user first name is ${data.name}, born in ${thisYear - data.age}.`);
}
  
fetchDataFromAPI(user, handleData);

//esercizio svolto in pair con Ilyasse Laraaj