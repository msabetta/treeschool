/*
1 - solo 1 export default per file
2 - posso avere quanti named export voglio (solo la parola export)
3 - i contenuti di questo file vanno importati per essere accessibili
*/

function sum(a, b) {
    return a + b;
}

export function multiply(a, b) {
    return a * b;
}

export const myFavouriteOperation = "subtract";

export default sum;

/*
IMPORT -> parola chiave
- il default export può essere rinominato a piacimento, meglio tenere un nome comprensibile
- i named export vanno estratti tramite graffe e separati da virgola, il nome deve essere lo stesso
- from -> parola chiave
- percorso -> tra apici definiamo il percorso con cui accedere al file

Se volessimo importare tutto questo file con nomi separati in un file che si trova nella stessa cartella

import sum, {multiply, myFavouriteOperation } from './utils'

*/