//Crea una funzione chiamata somma che accetta un numero qualsiasi di argomenti e restituisce la somma di tali argomenti.
//Utilizza il parametro rest per raccogliere gli argomenti. -Stampa in console l'output della funzione somma.
function somma (...numbers) {
    // numbers.forEach(number => {
    //     if (typeof number !== "number") {
    //         throw new Error("numbers must contain only numbers!");
    //     }
    // })
    return numbers.reduce((a, number)=> a + number, 0);
}

console.log(somma(1,"a",30));
