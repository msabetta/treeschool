//import 'modules';
function printArray(myArray){
    for(let i = 0; i < myArray.length; i++) {
        console.log(myArray[i]);
    }
}

let miaArray1 = new Array(14);
let miaArray2 = new Array();
let miaArray3 = new Array("primo", "secondo", "terzo");

console.log("miaArray1");
printArray(miaArray1);
console.log("Lunghezza array 1: " + miaArray1.length);
console.log("miaArray2");
printArray(miaArray2);
console.log("Lunghezza array 2: " + miaArray2.length);
console.log("miaArray3");
printArray(miaArray3);
console.log("Lunghezza array 3: " + miaArray3.length);

let myArray4 = new Array(true, "Matteo", "Lucia", "Catanzaro", 124);
//printArray2(myArray3);
printArray(myArray4);
var lunghezza = myArray4.length;
console.log("Lunghezza array 4: " + myArray4.length);


let myArray5 = new Array("a","b", "c");
console.log(myArray5[0]);
console.log(myArray5[1]);
console.log(myArray5[2]);
console.log(myArray5[myArray5.length - 1]);

console.log("array numeric0 di esempio")
let arrayEsempio = [10, 21, 1];
printArray(arrayEsempio);

console.log("push");
arrayEsempio.push(31);
printArray(arrayEsempio);

console.log("push all'indice");
arrayEsempio.push(31,1);
printArray(arrayEsempio);

console.log("pop")
arrayEsempio.pop()
printArray(arrayEsempio);

console.log("pop 2")
arrayEsempio.pop()
printArray(arrayEsempio);

console.log("shift")
arrayEsempio.shift()
printArray(arrayEsempio);


console.log("unshift");
arrayEsempio.unshift(13);
printArray(arrayEsempio);

console.log("splice");
arrayEsempio.splice(1,1,10000);
printArray(arrayEsempio);

console.log("splice");
arrayEsempio.splice(1,2,10000);
printArray(arrayEsempio);


arrayEsempio.push(1,2,3,4,5,6)

let nuovoArray = arrayEsempio.slice(2,arrayEsempio.length);
console.log(nuovoArray);

console.log(arrayEsempio);

console.log("concat")
let arrayConcatenato = arrayEsempio.concat(nuovoArray);
console.log(arrayConcatenato)
console.log(arrayConcatenato.sort());

console.log("sort")
let arraySort = ["Milano", "Roma", "Messina", "Firenze"];
console.log(arraySort.sort());

console.log("reverse");
console.log(arraySort.reverse());

console.log("indexOf")
console.log(arraySort.indexOf("Roma",0));

let array = ["Milano", "Roma", "Messina", "Firenze"];
console.log(array.indexOf("Roma",0)); //vedo se "Roma" è contenuto all'indice 0
console.log(array.indexOf("Romano",0)); //restituisce -1 perchè "Romano" non è presente nell'array

console.log("find/findIndex")
let arrayNumeri = [1,41,3,5,1,1,35,1]
let trovato = function(x){
    return x > 10;
}
let trovato2 = function(x){
    return x < 10;
}

let trovato3 = function(x){
    return x === 4;
}

console.log("x > 10");
console.log(arrayNumeri.find(trovato));
console.log(arrayNumeri.findIndex(trovato));

console.log("x < 10");
console.log(arrayNumeri.find(trovato2));
console.log(arrayNumeri.findIndex(trovato2));

console.log("x === 4");
console.log(arrayNumeri.find(trovato3));
console.log(arrayNumeri.findIndex(trovato3));

console.log("\n")
let arrayA = [123, "A", ["x","y","z"]];
printArray(arrayA)

let arrayBid = [[1,2,3], [3,4,1],[4,65,99,77,88] [6,7]];
printArray(arrayBid);
console.log(arrayBid.length);

for(let i=0; i< arrayBid.length; i++){
    if(arrayBid[i] !== undefined) {
        console.log(arrayBid[i].length);
    }
}


arrayBid[0][4] = 321;
printArray(arrayBid);

for(let i=0; i < arrayBid.length; i++){
    console.log(arrayBid[i]);
    if(arrayBid[i] !== undefined) {
        for (let j = 0; j < arrayBid[i].length; j++) {
            if (arrayBid[i][j] !== undefined) {
                console.log(arrayBid[i][j]);
            }
        }
    }
}

let arrayBid3 = [[20,21,1],[331,11,17], [4,11,75]];

console.log("stampa matrice")
for(let i=0; i<arrayBid3.length; i++) {
    for (let j = 0; j < arrayBid3[i].length; j++) {
        console.log(arrayBid3[i][j])
    }
}

console.log("stampa colonna 1")
for(let i=0; i<arrayBid3.length; i++) {
    console.log(arrayBid3[i][1]);
}

let arrayFor = ["Rosso", "Blue", "Verde", "Marrone"]
for(let index in arrayFor){
    console.log(arrayFor[index]);
}

for(let elem of arrayFor){
    console.log(elem)
}

arrayFor.forEach((element) => console.log(element));