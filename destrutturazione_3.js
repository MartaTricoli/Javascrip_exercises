//Dato un array di colori con tre elementi, utilizza la destrutturazione dell'array per creare variabili firstColor, secondColor e ThirdColor che contengono i valori dell'array.

const colors = ["red", "green", "blue"];

const [firstColor, secondColor, thirdColor] = colors;
console.log(`the first color in the array colors is ${firstColor.toUpperCase()}, the second color is ${secondColor.toUpperCase()} and the third color is ${thirdColor.toUpperCase()}`);