/*
*    Crea una pagina HTML con una lista di numeri.
*    Aggiungi due pulsanti: uno per ordinare i numeri in ordine crescente e un altro per ordinarli in ordine decrescente.
*    Implementa la logica JavaScript per ordinare dinamicamente i numeri quando i pulsanti vengono cliccati.
*/

let ul = document.getElementById('lista');
let array = [3,45,50,8,26,1,10,47];
let p = document.getElementById('array')
p.innerText = "[" + array.toString() + "]";

function populateList(){
    array.forEach( (num) => {
            const li = document.createElement('li');
            li.innerText = num;
            ul.appendChild(li);
        }
    );
}

function sort(){
   array.sort((a, b) => a - b);
   populateList();

}

function reverse(){
    array.sort((a, b) => b - a);
    populateList();
}


function clearList() {
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
}