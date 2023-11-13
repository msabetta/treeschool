/*  Creare una libreria di oggetti (almeno 4). Ogni oggetto deve contenere i seguenti attributi:
    nome => stringa
    autore => Stringa
    letto => boolean true se è stato letto, false altrimenti
    dataDiPubblicazione => Data
    capitoli => array bidimensionale. Ad Esempio [[1,4], [2, 5]] il primo capito è formato da 4 pagine, il secondo è formato da 5 pagine
    stampaCopertina() => funzione che restituisce una stringa formata da nome + autore + anno
    stampaPagineCapitoli() => funzione stampa il numero di pagine suddivise per capitoli
    anno() => funzione che restituisce l'anno di pubblicazione
    eventuali funzioni di supporto che potrebbero esservi utili

    1. stampare le pagine totali dei libri
    2. stampare l'elenco dei libri letti
    3. stampare le pagine totali dei libri letti
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

}

let lib1 = new libri("Inferno", "Dan Brown", true, "31/12/2006", [[1, 4], [2, 5]]);
let pagineCapitoli = lib1.capitoli.reduce((paginaPrec, paginaCurr) => paginaPrec + paginaCurr, 0);

stampaPagineCapitoli = function (libro) {
    let pagineCapitoli = libro.capitoli.reduce((paginaPrec, paginaCurr) => paginaPrec + paginaCurr, 0);
    console.log(pagineCapitoli)
}

stampaPagineCapitoli(lib1);


stampaPagineTotali = function (capitoli) {
    console.log(capitoli.length * 2);
}


stampaPagineTotali(lib1.capitoli);


let arrayLibri = [
    new libri("Inferno", "Dan Brown", true, "31/12/2006", [[1, 4], [2, 5]]),
    new libri("Divina Commedia", "Dante Alighieri", false, "1/1/1998", [[5, 8], [1, 10]]),
    new libri("Promessi Sposi", "Alessandro Manzoni", true, "13/2/2008", [[31, 6], [6, 10], [6, 77]]),
    new libri("Divina Commedia", "Dante Alighieri", false, "1/5/1998", [[5, 8], [1, 10], [8, 21]])
];



stampaLibriLetti = function () {
    let libriLetti = arrayLibri.filter(libro => libro.letto == true);
    console.log(libriLetti);
}

stampaLibriLetti();


stampaPagineTotaliLibriLetti = function () {

    let sommaTotale = 0;

/*     arrayLibri.forEach(libro => {
        for(let i=0; i<libro.capitoli.length; i++)
            sommaTotale = libro.capitoli[i][1];
    } ); */
    console.log();
    libriLetti = arrayLibri.filter(libro => libro.letto == true);

    for(let i=0; i<libriLetti.length; i++){
        for(j=0;j<libriLetti[i].capitoli.length;j++){
            sommaTotale += libriLetti[i].capitoli[j][1];
        }
    }

    

    console.log(sommaTotale);
}

stampaPagineTotaliLibriLetti();









