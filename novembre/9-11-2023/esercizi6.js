/*
    Leggere la data e mandare un messaggio di: Buongiorno: se l’orario ècompreso tra 00 e 14; Buon Pomeriggio: se l’orario è compreso tra le 14 e le 20; Buonasera: se l’orario ècompreso tra le 20 e le 24. [vardata = new Date()].

    Crea una funzione che decodifica i numeri nell’intervallo 1-5.  La decodifica trasforma il numero da numero a lettere.

    Creare una calcolatrice con soltanto le quattro operazioni base (+, *, -, /), l'operazione da eseguire deve essere definita attraverso una funzione esterna che prenda in input tre parametri, rispettivamente il tipo di operazione da eseguire  ed i due numeri su cui fare l'operazione. La funzione deve restituire il risultato e poi stamparlo a video.
 */

function sayHello(){
    let vardata = new Date();
    const hour = vardata.getHours();
    if(hour >= 0  && hour <= 14)
        printFunction("Buongiorno");
    else if(hour > 14  && hour < 20)
        printFunction("Buon Pomeriggio");
    else //hour >= 20  && hour <= 24
        printFunction("Buonasera");
}

//sayHello();

let numbers = [1,2,3,4,5];
//let letters = ["a","b","c","d","e", "f", "g", "h", "i", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "z"];

const code = {
    1: "a",
    2: "b",
    3: "c",
    4: "d",
    5: "e"
};

let decode = numbers.map(x => (x > 6) ? undefined : code[x]);
const int = 12345;
const intCod = int.toString().split("").map((x) => code[Number(x)])
const intCod2 = int.toString().split("").map((x) => code[x])  //stessa cosa di intCod
console.log(intCod)

printFunction("Calcolatrice");

/*
*    @param {number} operando1 = intero
*    @param {number} operando2 = intero
*    @returns restituisce il risultato di una operazione
*/
function calcolatrice(operando1, operando2,operazione){
    operazione = (operazione.trim()).toLowerCase();
    if(operazione === "+")
        return operando1 + operando2;
    else if(operazione === "-")
        return operando1 - operando2;
    else if(operazione === "/")
        return operando1 / operando2;
    else if(operazione === "*")
        return operando1 * operando2;
    else
        return undefined;
}

function printFunction(func){
    console.log(func);
}

printFunction(calcolatrice(3,4,"+"));
printFunction(calcolatrice(3,4,"*"));
printFunction(calcolatrice(3,4,"/"));
printFunction(calcolatrice(3,4,"-"));
printFunction(calcolatrice(3,4,"^"));

/*
*    @param {number} operando1 = intero
*    @param {number} operando2 = intero
*    @returns restituisce il risultato di una operazione
*/
function calcolatrice2(operando1, operando2, operazione){
    let risultato = 0;
    switch (operazione){
        case "+":
            risultato = operando1 + operando2;
            break;
        case "*":
            risultato = operando1 * operando2;
            break;
        case "/":
            if (operando2 == 0){
                 printFunction("Divisione non valida");
                 break;
            }
            risultato = operando1 / operando2;
            break;
        case "-":
            risultato = operando1 - operando2;
            break;
        default:
            risultato = undefined;
            break;
    }
    console.log(risultato);
    return risultato;
}

printFunction(calcolatrice2(3,4,"+"));
printFunction(calcolatrice2(3,4,"*"));
printFunction(calcolatrice2(3,4,"/"));
printFunction(calcolatrice2(3,4,"-"));
printFunction(calcolatrice2(3,4,"^"));



function decodifica(numero){
    switch(numero){
        case 1:
            printFunction("uno");
            break;
        case 2:
            printFunction("due");
            break;
        case 3:
            printFunction("tre");
            break;
        case 4:
            printFunction("quattro");
            break;
        case 5:
            printFunction("cinque");
            break;
        default:
            printFunction(undefined);
            break;
    }
}




















