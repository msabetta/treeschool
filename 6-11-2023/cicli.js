//FOR
/* document.open();
for(let i=0; i<10; i++){
    document.write(i);
}
document.close(); */

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log("ALTRO ESEMPIO:")
//CICLO WHILE
let jj = 0;
while (jj < 10) {  //WHILE (CONDIZIONE) { insieme di istruzioni }
    console.log(jj);
    jj++;
}
//CICLO DO-WHILE
let somma = 0;
do { // DO WHILE --> esegue istruzioni DO ==> (CONDIZIONE) { insieme di istruzioni } 
    somma += 1;
    console.log("SOMMA: " + somma);

}
while (somma < 10);


//BREAK
console.log("BREAK")
for (let i = 0; i < 10; i++) {
    if (i == 5)
        break;
    console.log(i);
}

//CONTINUE
console.log("CONTINUE")
for (let k = 0; k < 10; k++) {
    if (k == 5)
        continue;
    console.log(k);
}

console.log("somma aumentata di 5 - ciclo for");
somma = 0;
for (let i = 0; i < 10; i++) {
    somma += 5;
}
console.log(somma);

console.log("somma aumentata di 5 - ciclo while");
somma = 0;
let contatore = 0;
while (contatore < 10) {
    somma += 5;
    contatore += 1;
}
console.log(somma);


console.log("somma aumentata di 5 - ciclo do-while")
somma = 0;
contatore = 0;
do {
    somma += 5;
    contatore += 1;
} while (contatore < 10);
console.log(somma);

console.log("sottrai 3 per 10 volte");
let variabile = 100;
for (let i = 0; i < 10; i++) {
    variabile -= 3;
}
console.log(variabile);

let stringa1 = "Leone";
let stringa2 = "Leotta";
let stringa3 = "Leone";
console.log("Confronto stringhe " + stringa1 + " e " + stringa2);

/* let check = false;
for(let i=0; i<stringa1.length; i++){
    for(let j; j<stringa2.length; j++){
/*         if(i === j && typeof i == typeof j && i == j)
            check = true; */
// if(stringa1.charAt(i) == stringa2.charAt(j))
//   check = true;
// }
//}
//console.log("Check lettere: " + check);

//console.log(stringa1 + " " + stringa3);
//check = false;
/* for(let i=0; i<stringa1.length; i++){
    for(let j; j<stringa3.length; j++){
/*         if(i === j && typeof i == typeof j && i == j)
            check = true; */
/*             if(stringa1.charAt(i) == stringa3.charAt(j))
                check = true; */
//    }
/* //}
console.log("Check lettere: " + check); */

for (let i = 0; i < stringa1.length, i < stringa2.length; i++) {  //si può usare anche la virgola nella condizione di uscita invece di &&
    console.log("nuova iterazione");
    console.log(stringa1.charAt(i));
    console.log(stringa2.charAt(i));

    if (stringa1.charAt(i) === stringa2.charAt(i))
        console.log("Lettere uguali", stringa1.charAt(i), stringa2.charAt(i));
}

console.log("controllo stringhe Leone Leotta alternativo")
console.log(stringa1.match(stringa2));
if (stringa1.match(stringa2) == null)
    console.log("Le stringhe non sono uguali");
else
    console.log("Le stringhe sono uguali");

console.log("controllo stringhe Leone Leone alternativo")
console.log(stringa1.match(stringa3));
if (stringa1.match(stringa3) == null)
    console.log("Le stringhe non sono uguali");
else
    console.log("Le stringhe sono uguali");

console.log("multipli di 3")
for (let i = 0; i <= 15; i++) {
    if (i % 3 == 0)
        console.log(i);
}


console.log("numeri pari")
for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0)
        console.log(i);
}


const funnySheepNames = [
    "Baa-rack Obaa-ma",
    "Sheep Thrills",
    "Woolly Nelson"
];

for (let i = 0; i < funnySheepNames.length; i++) {
    console.log(funnySheepNames[i]);
}

/*
Creiamo un’array con 5 o più stringhe a vostro piacere.
Utilizzate i console.log per stampare a console indice e
stringa all’indice per prendere confidenza e vedere cosa
succede ad ogni esecuzione!
*/
const students = [
    "Paolo",
    "Vincenzo",
    "Arianna",
    "Giada",
    "Marco"
];

for (let i = 0; i < students.length; i++) {
    console.log("index --> " + i + " student --> " + students[i]);
}

//print stringhe solo con lunghezza 10 caratteri
/*
Creiamo un’array con 10 o più stringhe a vostro piacere di
lunghezza differente.
Utilizzate i console.log per stampare a console solamente
le stringhe la cui lunghezza è maggiore o uguale a 10
caratteri.

*/
const companies = [
    "Paolo e Francesca",
    "Orange Company",
    "Arianna",
    "Giada1",
    "Marcojjj",
    "Amedeos Corporation",
    "Idea"
];



for (let i = 0; i < companies.length; i++) {
    if (companies[i].length >= 10) {
        console.log("elemento " + i + ": " + companies[i] + " lunghezza " + "elemento " + i + ": " + companies[i].length);
    }
}


//Fizz/Buzz/FizzBuzz
/*
Scrivi un ciclo che cicli i numeri da 1 a 100. Per i numeri
multipli di 3 stampa "Fizz" mentre per i multipli di 5 stampa
"Buzz". Per i numeri che sono multipli sia di 3 che di 5
stampa "FizzBuzz".
Questo potrebbe essere tosto la prima volta!
*/
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0)
        console.log(i + " Fizz");
    else if (i % 5 === 0)
        console.log(i + " Buzz");
    else if ((i % 3 === 0) && (i % 5 === 0))
        console.log(i + " FizzBuzz");
    else
        console.log(i);
}


//ufficio motorizzazione
/*
Creaiamo un’array di oggetti.
Ogni oggetto rappresenta una persona che si presenta all’ufficio e ha proprietà name, age,
monthOfBirth (mese nascita).
Crea un ciclo per cui ogni persona se ha meno di 18 anni viene invitata ad uscire per limite di età
insufficiente (con un log), se ha almeno 18 anni controlliamo se ha più di 60 anni, se si la invitiamo
ad uscire per limite di età superato.
Se non è stata bloccata da questi controlli le annunciamo che il costo per ottenere la patente è 500
€ (sempre log), ma se il suo nome inizia con la R ha diritto ad uno sconto del 20% su tale prezzo
(loggare sconto e cifra scontata).
*/
const drivers = [
    { name: "Mario", monthOfBirth: "January", age: 18 },
    { name: "Daniele", monthOfBirth: "July", age: 40 },
    { name: "Gianluca", monthOfBirth: "August", age: 70 },
    { name: "Matteo", monthOfBirth: "May", age: 80 },
    { name: "Alba", monthOfBirth: "June", age: 15 },
    { name: "Giorgia", monthOfBirth: "April", age: 13 },
    { name: "Manuela", monthOfBirth: "October", age: 95 },
    { name: "Roberto", monthOfBirth: "November", age: 32 },
    { name: "Rita", monthOfBirth: "December", age: 35 }
];


/*
for (let k = 0; k < clienti.length; k++) {
    if (clienti[k].età < 18 || clienti[k].età > 60) {console.log(clienti[k].nome + " hai raggiunto il limite di età")}
    else if (clienti[k].nome.startsWith("r")) {console.log(clienti[k].nome + " la patente costa €500 ma hai uno sconto del 20%")}
    else {console.log(clienti[k].nome + " la patente costa €500")}
}
*/

for (let i = 0; i < drivers.length; i++) {
    if (drivers[i].age < 18)
        console.log(drivers[i].name + " sei invitato/a ad uscire per limite di età insufficiente");
    else if (drivers[i].age >= 18) {
        if (drivers[i].age > 60) {
            console.log(drivers[i].name + " sei invitato/a ad uscire per limite di età superato");
        }
        else {
            console.log(drivers[i].name + ", il costo per ottenere la patente è 500€");
            if (drivers[i].name.startsWith("R")) {
                let priceWithDiscount = 500 * (1 - (20 / 100));
                console.log(drivers[i].name + " ha diritto ad uno sconto del 20% ed il costo per ottenere la patente è " + priceWithDiscount);
            }
        }

    }
}


