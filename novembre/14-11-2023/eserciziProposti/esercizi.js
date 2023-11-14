/*1) Modificare l'esercizio libreria affinché la libreria venga visualizzata su una tabella, dove ogni riga corrisponde ad un libro.
    Ogni libro dovrà avere le seguenti informazioni:
    1. nome (text)
    2. autore (text)
    3. Data di uscita del libro (non anno)
    4. Numero di pagine totali del libro (integer)
    -  RICERCA: sopra la tabella deve essere presente un input type text ed un bottone
     "cerca". Al click del bottone devono essere cercati tutti i libri dell'autore scritto sulla text. 
     Le righe dei libri trovati devono essere colorate di verde (potete ridisegnare la tabella). 
     Attenzione, il nome dell'autore potrebbe essere incompleto, ad esempio ricerca per nome e/o cognome

    -  INSERIMENTO: creare una form per inserire un nuovo libro. 
    1. controllare che tutti i campi siano stati inseriti e che abbiano dei valori corretti.
    2. Il nuovo libro correttamente inserito deve essere visualizzato sulla tabella 
        (potete ridisegnare la tabella).

    -   CANCELLA: creare una form per eliminare un libro.
    1. Il libro può essere cancellato solo se vengono selezionati il nome e l'autore del libro.
    2. Se uno dei due campi non è settato allora deve apparire un alert di avviso (potete ridisegnare la tabella).
*/

function libri(nome, autore, letto, dataDiPubblicazione, capitoli) {
    this.nome = nome;
    this.autore = autore;
    this.letto = letto;
    this.capitoli = capitoli;
    this.dataDiPubblicazione = dataDiPubblicazione;

    this.anno = function () {
        return this.dataDiPubblicazione.split("/")[2];
    }

    this.stampaCopertina = function () {
        console.log("NOME: " + this.nome + "AUTORE: " + this.autore + "ANNO: " + this.anno);
    }

    this.stampaPagineCapitoli2 = function () {
        for (var capitolo of this.capitoli) {
            console.log(capitolo[0], capitolo[1]);
        }
    }

    this.stampaTotali = function () {
        var mumeroPagine = 0;
        for (var libro of arrayLibri) {
            numeroPagine += libro.numeroTotaleDiPagine();
        }
    }

    this.PagineTotaliLibro = function (libro) {
        //let myArray = this.capitoli;
        let myArray = libro;
        let somma = 0;
        /*         for(let i = 0; i< myArray.length; i++) {
                    for(let j = 0; j < myArray[i].length; j++) {
                        somma += myArray.capitoli[j][1];
                    }
                } 
        */
        for (let j = 0; j < myArray[j].capitoli.length; j++) {
            for (let k = 0; k < myArray[j].capitoli[j].length; k++) {
                somma += myArray[j].capitoli[j][1];
            }
        }
        return somma;
    }

}



let arrayLibri = [
    new libri("Inferno", "Dan Brown", true, new Date(2016, 12, 1), [[1, 4], [2, 5], [5,10]]),
    new libri("Divina Commedia", "Dante Alighieri", false, new Date(2008, 3, 1), [[5, 8], [1, 10], [6,13]]),
    new libri("Promessi Sposi", "Alessandro Manzoni", true, new Date(2006, 8, 5), [[31, 6], [6, 10], [6, 77]]),
    new libri("Il giorno", "Giuseppe Parini", false, new Date(2015, 4, 13), [[5, 8], [1, 10], [8, 21]])
];

let labels = document.getElementById('etichette');
let bodyTable = document.getElementById('tabella-body');
let table = document.getElementById('table');


arrayLibri.forEach(libro => {
    let tr = document.createElement('tr');
    let td_nome = document.createElement('td');
    td_nome.textContent = libro.nome.trim();
    td_nome.style.textAlign = "center";
    let td_autore = document.createElement('td');
    td_autore.textContent = libro.autore.trim();
    td_autore.style.textAlign = "center";
    let td_dataPubblicazione = document.createElement('td');
    td_dataPubblicazione.textContent = libro.dataDiPubblicazione.getDate() + "/" + libro.dataDiPubblicazione.getMonth() + "/" + libro.dataDiPubblicazione.getFullYear();
    td_dataPubblicazione.style.textAlign = "center";
    let td_numPagine = document.createElement('td');
    td_numPagine.textContent = libro.PagineTotaliLibro(arrayLibri);
    td_numPagine.style.textAlign = "center";
    tr.append(td_nome, td_autore, td_dataPubblicazione, td_numPagine);
    bodyTable.appendChild(tr);
});

/* function aggiungiLibri(){
    let nome = document.getElementById("name").value;
    console.log(nome);
    let surname = document.getElementById("cognome").value;
    let city = document.getElementById("city").value;
    //console.log(nome,cognome, city);
    utenti.push(nome + " " + surname + " " + city);
    console.log(utenti);
} */





//RICERCA

cercaLibriAutore = function (libri) {
    let autore = document.getElementById('autore');
    let booksAuthor = libri.filter(libro => libro.autore === autore.value || libro.autore.split(" ")[0] === autore.value || libro.autore.split(" ")[1] === autore.value)
    //booksAuthor.style.color = "green";
    return booksAuthor;
}

cercaLibro = function (inputLibro, libri) {
    let bookFound = libri.filter(libro => libro.nome === inputLibro.value)
    return bookFound;
}

cercaAutore = function (inputAutore, libri) {
    let autoreFound = libri.filter(libro => libro.nome === inputAutore.value)
    return autoreFound;
}


applyStyle = function (elem) {
    for (let j = 0; j < elem.length; j++) {
        for (let i = 0; i < i < bodyTable.children.length; i++) {
            if (bodyTable.children[i].innerText.split("\t")[1] === elem[j].autore || bodyTable.children[i].innerText.split("\t")[1].split(" ")[0] === elem[j].autore || bodyTable.children[i].innerText.split("\t")[1].split(" ")[1] === elem[j].autore) {
                bodyTable.children[i].style.color = "green";
            }
        }
    }
}

clearStyle = function (elem) {
    for (let j = 0; j < elem.length; j++) {
        for (let i = 0; i < i < bodyTable.children.length; i++) {
            if (bodyTable.children[i].innerText.split("\t")[1] === elem[j].autore || bodyTable.children[i].innerText.split("\t")[1].split(" ")[0] === elem[j].autore || bodyTable.children[i].innerText.split("\t")[1].split(" ")[1] === elem[j].autore) {
                bodyTable.children[i].style.color = "black";
            }
        }
    }
}


let btnFind = document.getElementById('find');
btnFind.onclick = function () {
    found = cercaLibriAutore(arrayLibri);
    applyStyle(found);
}




let btnInsert = document.getElementById('insert');
btnInsert.onclick = function () {
    //catturo gli input per l'inserimento
    let nomeLibro = document.getElementById('libro');
    let autore = document.getElementById('autore');
    let dataPubblicazione = document.getElementById('dataPubblicazione');
    let numTotalePagine = document.getElementById('numtot');

    //inserisco i dati di interesse
    let tr = document.createElement('tr');
    let td_nome = document.createElement('td');
    td_nome.innerText = nomeLibro.value.trim();
    td_nome.style.textAlign = "center";
    let td_autore = document.createElement('td');
    td_autore.innerText = autore.value.trim();
    td_autore.style.textAlign = "center";
    let td_dataPubblicazione = document.createElement('td');
    td_dataPubblicazione.innerText = dataPubblicazione.value.trim();
    td_dataPubblicazione.style.textAlign = "center";
    let td_numPagine = document.createElement('td');
    td_numPagine.innerText = numTotalePagine.value.trim();
    td_numPagine.style.textAlign = "center";

    //accodamento
    /*     if (td_nome.textContent != "" && td_autore.textContent != "" && td_dataPubblicazione.textContent != "" && td_numPagine.textContent != "") {
            tr.append(td_nome, td_autore, td_dataPubblicazione, td_numPagine);
            //bodyTable.appendChild(tr);
            bodyTable.push(tr);
        } else {
            alert("Inserimento dati non corretto!");
        } */

    if (td_nome.value != "" && td_autore.value != "") {
        tr.append(td_nome, td_autore, td_dataPubblicazione, td_numPagine);
        bodyTable.appendChild(tr);
        table = table.appendChild(bodyTable);
    } else {
        alert("Inserimento dati non corretto!");
    }

}

cancellaLibro = function () {
    //catturo gli input per l'inserimento
    let nomeLibro = document.getElementById('libro');
    let autore = document.getElementById('autore');
    //let findAutore = cercaAutore(autore,arrayLibri);
    let findLibro = cercaLibro(nomeLibro, arrayLibri);

    if (findLibro != null) {
        for (let i = 0; i < i < bodyTable.children.length; i++) {
            let autoreTable = bodyTable.children[i].innerText.split("\t")[1];
            let libroTable = bodyTable.children[i].innerText.split("\t")[0];
            if (autoreTable != null && libroTable != null) {
                if (autoreTable === findLibro[0].autore && libroTable === findLibro[0].nome) {
                    bodyTable.children[i].remove();
                    table.appendChild(bodyTable);

                    //posso usare anche la splice in alternativa sull'array di libri
                }
            }
        }
    } else {
        alert("Dati non corretti!Riprovare");
    }
}



let btnDelete = document.getElementById('delete');
btnDelete.onclick = function () {
    cancellaLibro();
}


let btnClear = document.getElementById('clear');
btnClear.onclick = function(){
    clearStyle();
}
















