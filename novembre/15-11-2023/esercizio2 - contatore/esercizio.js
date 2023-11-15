/*
Crea una pagina HTML con un pulsante e un contatore inizialmente impostato a zero.
Implementa la logica JavaScript per incrementare/decrementare il valore del contatore ogni volta che il pulsante viene cliccato.
*/

let counter = 0;
let p = document.getElementById("counter");

function increment() {
    counter = counter + 1; 
    p.innerText = counter;
}

function decrement() {
    counter = counter - 1;
    p.innerText = counter;
}









