function printArray(myArray){
    for(let i = 0; i < myArray.length; i++) {
        console.log(myArray[i]);
    }
}

function printEven(myArray){
    for(let i = 0; i < myArray.length; i++) {
        if(myArray[i] % 2 === 0)
            console.log(myArray[i]);
    }
}

/*
let myArray = new Array(10);
//console.log(myArray);
for(let i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
}
let myArray2 = new Array();
for(let i = 0; i < myArray2.length; i++){
    console.log(myArray2[i]);
}





let myArray3 = new Array("gatto","cane","leone");
for(let i = 0; i < myArray3.length; i++){
    console.log(myArray3[i]);
    console.log(myArray3[i].charAt(0));
}
let myArray4 = [true,"Matteo","Lucia","Catanzaro",124];
for(let i = 0; i < myArray4.length; i++){
    console.log(myArray4[i]);
    //console.log(myArray4[i].charAt(0));  --> ERRORE
}

let myArray5 = new Array("a","b","c");
console.log(myArray5[0]); //a
console.log(myArray5[1]); //b
console.log(myArray5[2]); //c
console.log(myArray5[myArray5.length -1]); //c


let arrayEsempio = [10,21,1]; // length = 3
for(let indice = 0; indice < arrayEsempio.length; indice++){ //0... N-1
    let elemento = arrayEsempio[indice]; //arrayEsempio[0];arrayEsempio[1]; arrayEsempio[2],...
    console.log(elemento);
}
console.log(arrayEsempio.length);
// prima iterazione: indice = 0 --> arrayEsempio[0] = 10
// seconda iterazione: indice = 1 --> arrayEsempio[1] = 21
// terza iterazione: indice = 2 --> arrayEsempio[2] = 1

console.log("DOPO..");
arrayEsempio.push(31);
for(let i = 0; i < arrayEsempio.length; i++){
    console.log(arrayEsempio[i]);
}
 */


let myArray = [3,2,31,23,4];
console.log(myArray[0]);
console.log(myArray[myArray.length - 1]);


myArray.push(21,7,4);
printEven(myArray);
console.log("elimina valore 2");

let indexFind = myArray.indexOf(2,0)

myArray.splice(indexFind,1);
printArray(myArray);

let myArrayStrings =  ["gatto", "cane", "renna", "pinguino", "coccodrillo"];
printArray(myArrayStrings)
console.log("- aggiungi 3 animali")
myArrayStrings.push("cavallo","elefante","gnu");
printArray(myArrayStrings)

console.log("stampa somma lettere delle parole")
let somma = 0;
for(let i= 0 ; i<myArrayStrings.length; i++){
    somma += myArrayStrings[i].length;
}
console.log(somma);

let stringaAnimali = myArrayStrings.join("");
console.log(stringaAnimali)
console.log(stringaAnimali.length);



console.log("stampa parole con doppie consonanti")
/*
let trovato = function(x){
    let flag = false;
    for(let i= 0; i < x.length; i++){
        if(x.slice(i,i+2) === "tt" || x.slice(i,i+2) === "cc" || x.slice(i,i+2) === "ll" ) {
            flag = true;
            break;
        }
    }
    return flag;
}
*/

function verificaDoppie(elem){
    //let flag = false;
    for(let i= 0; i < elem.length - 1; i++){
        // if(elem.slice(i,i+2) === "tt" || elem.slice(i,i+2) === "cc" || elem.slice(i,i+2) === "ll" ) {
        //     flag = true;
        //     break;
        // }
        if(elem[i] === elem[i+1]){
            // flag = true;
            // break;
            return true;
        }
    }
    //return flag;
    return false;
}

for(let i= 0; i < myArrayStrings.length; i++){
    // console.log(myArrayStrings[i].find(trovato));
    // console.log(myArrayStrings[i].findIndex(trovato))
    let elemento = myArrayStrings[i];
    let check= verificaDoppie(elemento);
    if(check === true){
        console.log(elemento);
    }
}


for (let animale of myArrayStrings){
    if(contaLettere(animale) > 4){
        console.log("animale trovato", animale);
    }
}

function contaLettere(el){
    return el.length;
}

function verificaNumero(el){
    if(el.length > 4)
        return true;
    return false;
}

for (let animale of myArrayStrings){
    if(verificaNumero(animale)){
        console.log("animale trovato", animale);
    }
}


let vocali = ["a", "e", "i", "o", "u"];
let arrayAnimals4 = ["gatto", "cane", "renna", "pinguino", "coccodrillo"];

for(let i = 0; i<arrayAnimals4.length; i++){
    console.log(arrayAnimals4[i]);
    if(numberConsonanti(arrayAnimals4[i]) > 4){
        console.log("stampa parole con numero consonanti maggiore di 4");
        console.log(arrayAnimals4[i])
    }
}


function numberConsonanti(elemento){
    let sommaConsonanti = 0;
    for(let j= 0; j < elemento.length; j++){
        let lettera = elemento[j];
        if ( !vocali.includes(lettera) ){ //è una consonante
            sommaConsonanti += 1;
        }
    }
    return sommaConsonanti;
}

let array = [];


//posso usare una slice(1,dim-1) oppure fare un ciclo for (da 1 a dim-1) con le push ad ogni iterazione a partire da 1 fino a length-1
function smontatore(array){
    let new_arr = [];
    let dim = array.length;
    for(let i = 1; i<dim-1; i++){
        new_arr.push(array[i]);
    }
    return new_arr;
}

let nomi_ragazzi = ["Mario", "Riccardo", "Giovanni"];
console.log(nomi_ragazzi);
let smontato = smontatore(nomi_ragazzi);
console.log(smontato);

nomi_ragazzi.push("Matteo");
console.log(nomi_ragazzi);
let smontato2 = smontatore(nomi_ragazzi);
console.log(smontato2);
console.log()

let arrayAnimals5 = ["gatto", "cane", "renna", "pinguino", "coccodrillo", "ornitorinco", "bue", "orso", "topo", "cinghiale"];
let new_arrayAnimali = arrayAnimals5.slice(1,arrayAnimals5.length-1)

function theManipulator(myArray){
    const newArray = [myArray[0], myArray[1], myArray[2]];
    newArray.shift();
    newArray.pop();
    return newArray;
}

function theManipulator2(myArray){
    const newArray = myArray.concat([]);
    newArray.shift();
    newArray.pop();
    return newArray;
}


let arrayAnimals6 = ["gatto", "cane", "renna", "pinguino", "coccodrillo", "ornitorinco", "bue", "orso", "topo", "cinghiale"];
console.log(arrayAnimals6);

function smontatore_folle2(array){
    let new_arr = [];
    let dim = array.length;
    //new_arr = new_arr.concat(array.slice(1,dim - 1));
    new_arr = new_arr.concat(array.slice(1,dim - 1));
    return new_arr;
}

console.log(smontatore_folle2(arrayAnimals6));


function smontatore_folle(array){
    let new_arr = [];
    let dim = array.length;
    // for(let i = 1; i<dim-1; i++){
    //     //new_arr.push(array[i]);
    //     new_arr = new_arr.concat(array[i]);
    // }
    for(let i = 0; i<dim; i++){
        if(i%2 == 0){
            new_arr = new_arr.concat(array[i]);
        }
    }

    return new_arr;
}

let amici = ["Mario", "Riccardo", "Giovanni","Pasquale", "Gina", "Eusebio","Francesco", "Piero", "Lisa", "Paola"];

console.log(smontatore_folle(amici));










