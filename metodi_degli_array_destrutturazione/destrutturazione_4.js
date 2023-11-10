//Date due variabili a e b, scambia i loro valori usando la destrutturazione.

let a = 5;
let b = 10;

const list = [a , b];
[b, a] = list;

console.log(`Now a = ${a} and b = ${b}`);