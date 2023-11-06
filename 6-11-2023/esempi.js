//manipolazione stringhe

//CHARAT
let prova4 = "CIAO";
let dim = prova4.length;
console.log("lunghezza: " + dim);
let car = prova4.charAt(0);
console.log(car);
let car2 = prova4.charAt(3);
console.log(car2);
let car3 = prova4.charAt(prova4.length - 1);
console.log(car3);


//REPLACE
let prova5 = "CIAOC"; // sostituire C con S
let rep = prova5.replace("C","S");
console.log(rep);
rep = prova5.replace("CI","SO");
console.log(rep);
rep = prova5.replace("C","CCCCC");
console.log(rep);
rep = prova5.replace("CA","SSSSSS"); //nessuna sostituzione
console.log(rep);


//REPLACEALL
console.log(prova5.replaceAll("C","S"));
console.log(prova5);

prova5 = prova5.replace("C", "T");
console.log(prova5)

//INDEXOF

console.log(prova5.indexOf("C"));

console.log(prova5.indexOf("A"));

console.log(prova5.indexOf("IA"));

let prova6 = "MONDOBM";
console.log(prova6.indexOf("M")); //prima occorrenza




//LASTINDEXOF
console.log(prova6.lastIndexOf("M")); //ultima occorrenza


//SUBSTR/SUBSTRING
console.log(prova6.substr(0,3)); // parte da 0 ed estrae 3 caratteri (deprecato)
console.log(prova6.substring(0,3));


console.log(prova6.substr(1,3)); // parte da 1 ed estrae 3 caratteri (deprecato) ----> OND
console.log(prova6.substring(1,3)); // ---> ON

console.log(prova6.substring(2)); //dal carattere 2 in poi

//SLICE
console.log(prova6.slice(1,3));
console.log(prova6.slice(1,-3));

//TRIM
let prova7 = " Gabriella Verga     ";
console.log(prova7.trim());

//TOUPPERCASE/TOLOWERCASE
console.log(prova7.toUpperCase());
console.log(prova7.toLowerCase());


console.log(prova7.includes("Gabriella"));
console.log(prova7.trim().startsWith("Gabriella"));
console.log(prova7.trim().endsWith("ga"));



let number = 20;
number = 10;
console.log(number);

let string = "Catania";
let sottostringa = "ta"
console.log(string.includes(sottostringa));


let lunghezzaStringa = string.length;
console.log(lunghezzaStringa);
let lunghezzaSottostringa = sottostringa;
let diff = lunghezzaStringa - lunghezzaSottostringa;
console.log(diff);


let stringa = "Italia";
let primoCarattere = stringa[0];
console.log("Primo carattere: " + primoCarattere);
let ultimoCarattere = stringa[stringa.length - 1];
console.log("Ultimo carattere: " + ultimoCarattere)

console.log(s3.substring(1,s3.length))
console.log(s3.slice(1,s3.length))
console.log(s3.slice(1))
console.log(s3.substring(1))



