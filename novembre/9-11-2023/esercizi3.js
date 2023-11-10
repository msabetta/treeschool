//funzione MAP
let array = [1,2,3,45,67,99];

//aggiungere ad ogni elemento il numero 10
let array2 = new Array();
for(let i=0; i<array.length; i++){
    array2[i] = array[i] + 10;
}

console.log(array)
console.log(array2)

//in alternativa al ciclo for
let array3 = array.map(el => el + 10) //function arrow
console.log(array3);

/*
function(el){
    return el + 10;
}
*/


//funzione FILTER valori > 40 => let arrayFiltrato = [45,67,99];
console.log("funzione FILTER valori > 40")
let arrayFiltrato = array.filter(el => el > 40);
console.log(arrayFiltrato);

//funzione REDUCE
//prec = 0
//current = 1
//0+1 => prec

//prec = 1
//current = 2
//1+2 => prec
console.log("addizione");
//addizione
let somma2 = array.reduce((prec, current) => prec + current, 0);
console.log(somma2);
console.log("sottrazione");
//sottrazione
let sottrazione2 = array.reduce((prec, current) => prec - current, 0);
console.log(sottrazione2);

console.log("funzione FOREACH")
//Funzione FOREACH
for(let i=0; i<array.length; i++){
    console.log(array[i]);
}
array.forEach(elem => console.log(elem));