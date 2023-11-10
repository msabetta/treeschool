/*
    Eseguire i seguenti esercizi con e senza i metodi

    Dato il seguente array = [1,2,3,45,6,77,8,9,10]
    moltiplicare tutti i numeri x5 e inserire l'array in uno nuovo
    filtriamo gli elementi compresi tra 5 e 2
    sommiamo tutti gli elementi dell'array
    ottenere il valore del primo elemento dell’array che ha un valore di 18 o superiore:
    stampare l’array risultante
*/

let array = [1,2,3,45,6,77,8,9,10];
let array2 = [];

for(let i=0; i<array.length; i++){
    array2[i] = array[i] * 5;
    console.log(array2[i]);
}

let arrayMap = array.map(elem => elem * 5);
console.log(arrayMap);


let arrayFilter = array.filter(elem => elem >= 2 && elem <= 5);
console.log(arrayFilter);

let arrayReduce = array.reduce((prec,current) => prec + current, 0)
console.log(arrayReduce)

let arrayFilter2 = array.filter(elem => elem >= 18); // valore = 45 (primo elemento dell'array [45,77]
console.log(arrayFilter2[0]);

console.log(array.find(function(elem){return elem >= 18}));
console.log(array.find(x => x >= 18));

console.log("for-each");
array.forEach(elem => console.log(elem));
console.log();
array2.forEach(elem => console.log(elem));
console.log();
arrayFilter.forEach(elem => console.log(elem));
console.log();
arrayMap.forEach(elem => console.log(elem));
console.log();

//arrayReduce.forEach(elem => console.log(elem));
const arr6 = [];
array.forEach(elem => {
    arr6.push(elem);
    console.log(elem);
});

