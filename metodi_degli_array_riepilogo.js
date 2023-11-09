//In questo esercizio dato un array di studenti:

const studenti = [
    { nome: "Alice", voto: 95 },
    { nome: "Bob", voto: 88 },
    { nome: "Carol", voto: 76 },
    { nome: "David", voto: 92 },
    { nome: "Eve", voto: 84 },
];

//1. Utilizza forEach per stampare i nomi degli studenti.
let listaNomi = "";
studenti.forEach(studente => listaNomi += ` ${studente.nome}`);
console.log(`I nomi degli studenti sono: ${listaNomi}`);

//2. Utilizza find per trovare uno studente con un voto superiore a 90.
console.log(studenti.find(studente => studente.voto > 90));

//3. Utilizza reduce per calcolare la media dei voti degli studenti.
console.log(`La media dei voti degli studenti è: ${studenti.reduce((a, studente) => a + studente.voto, 0)/studenti.length}`);

//4. Utilizza map per creare un nuovo array contenente i nomi degli studenti in maiuscolo.
console.log(studenti.map(studente => studente.nome.toUpperCase()));

//5. Utilizza filter per trovare gli studenti con voti superiori a 85.
console.log(studenti.filter(studente => studente.voto > 85));