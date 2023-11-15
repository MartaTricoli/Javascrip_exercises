function visualizzaOrologio() {
    const orarioCorrente = new Date();
    const ore = orarioCorrente.getHours();
    const minuti = orarioCorrente.getMinutes();
    const secondi = orarioCorrente.getSeconds();
    
    console.log(`Ora attuale: ${ore}:${minuti}:${secondi}`);
}

//Utilizza setInterval per chiamare la funzione "visualizzaOrologio" ogni secondo.
setInterval (visualizzaOrologio, 1000);