/*

Dato il seguente array [3,1,40,12,42,100,431,76,4,9]. Creare dei bottoni che al click scatenano un evento.

    Il primo bottone mostra un messaggio con la somma.

    Il secondo colora di blu il numero maggiore.

    Il terzo colora di rosso il numero più piccolo.

    Il quarto sceglie un numero casuale e lo triplica.

    Il quindi bottone mostra un messaggio con la somma tutti i numeri pari.

    */
window.onload = function () {
    let array = [3, 1, 40, 12, 42, 100, 431, 76, 4, 9];

    let pArray = document.getElementById('array')
    pArray.textContent = "[" + array.toString() + "]";


    //creazione bottoni
    let button1 = document.getElementById('primo-bottone');
    let button2 = document.getElementById('secondo-bottone');
    let button3 = document.getElementById('terzo-bottone');
    let button4 = document.getElementById('quarto-bottone');
    let button5 = document.getElementById('quinto-bottone');


    //Primo bottone
    function sum(array){
        let somma = 0;
        for (let i = 0; i < array.length; i++) {
            somma += array[i];
        }
        return somma;
    }

    function sum2(array){
        let somma = array.reduce((prec,current) => prec + current,0);
        return somma;
    }

    button1.onclick = function () {
        let messaggio = document.getElementById("messaggio");
        messaggio.textContent = "Somma array: " + sum2(array);
        //alert("Somma array: " + somma);
    }

    //Secondo bottone
    function FindMax(array) {
        let max = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }
        return max;
    }

    function FindMax2(array){
        let max = array.reduce((a,b) => {
            return Math.max(a,b);
        }, array[0]);
        return max;
    }


    button2.onclick = function () {
        let messaggio = document.getElementById("messaggio");
        let p = document.createElement('p');
        p.textContent = FindMax2(array);
        //p.textContent = Math.max(...array);
        p.style.color = "blue";
        messaggio.appendChild(p);
    }

    //Terzo bottone
    function FindMin(array) {
        let min = array[array.length - 1];
        for (let i = 0; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i];
            }
        }
        return min;
    }
    
    function FindMin2(array){
        let min = array.reduce((a,b) => {
            return Math.min(a,b);
        }, array[0]);
        return min;
    } 



    button3.onclick = function () {
        let messaggio = document.getElementById("messaggio");
        let p = document.createElement('p');
        let min = FindMin2(array);
        //let min = Math.min(...array);
        p.textContent = min.toString();
        p.style.color = "red";
        messaggio.appendChild(p);
    }


    //Quarto bottone
    button4.onclick = function () {
        let messaggio = document.getElementById("messaggio");
        let indexRandom = Math.floor(Math.random() * array.length);
       /*  let randomElemArray = 0; */
/*         if (indexRandom < array.length) {
            randomElemArray = array[indexRandom];
        } else {
            randomElemArray = 0;
        } */
        let randomElemArray = array[indexRandom];
        let num = randomElemArray * 3;
        let p = document.createElement('p');
        p.textContent = num.toString();
        messaggio.appendChild(p);
        /*     p.style.color = "red"; */
    }


    //Quinto bottone
    function SumEvenNumbers(array) {
        let somma = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 === 0) {
                somma += array[i];
            }
        }
        return somma;
    }

    function SumEvenNumbers2(array) {
        let elementFilter = array.filter(el => el%2==0);
        console.log(elementFilter)
        let sommaElem = elementFilter.reduce((a,b) => a+b, 0);
        console.log(sommaElem);
        return sommaElem;
    }

    button5.onclick = function () {
        let messaggio = document.getElementById("messaggio");
        let p = document.createElement('p');
        p.textContent = SumEvenNumbers2(array);
        messaggio.appendChild(p);
        /*     p.style.color = "red"; */
    }



}














