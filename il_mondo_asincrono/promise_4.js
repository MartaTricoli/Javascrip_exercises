/*
1. Crea una Promise che simula il recupero dei dati da un'API.
2. A volte la richiesta avrà successo, a volte fallirà con un messaggio di errore.
3. Crea una variabile chiamata success con un valore numerico random da 0 a 0.5
4. La chiamata avrà successo con il messaggio Data retrieved successfully se il valore random è inferiore a 0.5 altrimenti fallisce con il messaggio Error: Failed to fetch data
*/
const success = (Math.random() *(0.51) + 0).toFixed(1);

function fetchDataFromAPI(number) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (!isNaN(+number) && number < 0.5) {
                resolve ("Data retrieved successfully");
            } else {
                reject ("Error: Failed to fetch data")
            }
        }, 1500);
    });
}
  
fetchDataFromAPI(success).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});

//questo è stato carino!