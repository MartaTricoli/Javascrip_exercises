//Dato uno studente oggetto nidificato con informazioni sulle proprietà e voti, utilizza la destrutturazione dell'oggetto per creare variabili nome, età e voto che contengano i valori dell'oggetto nidificato.

const student = {
    info: { name: "Bob", age: 25 },
    grades: { math: 95, science: 89 }
};

const {info: {name, age}, grades} = student;
console.log(name);
console.log(age);
console.log(grades);

//se volessimo suddividere anche i voti grades {math, science}
//se viene richiesto invece di cambiare i nomi alle variabili: name: nome, age: età, grades: voti etc.