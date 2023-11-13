/* Creare una libreria di oggetti (almeno 4). Ogni oggetto deve contenere i seguenti attributi:
    nome => stringa
    autore => Stringa
    letto => boolean true se è stato letto, false altrimenti
    dataDiPubblicazione => Data
    capitoli => array bidimensionale. Ad Esempio [[1,4], [2, 5]] il primo capito è formato da 4 pagine, il secondo è formato da 5 pagine
    stampaCopertina() => funzione che restituisce una stringa formata da nome + autore + anno
    stampaPagineCapitoli() => funzione stampa il numero di pagine suddivise per capitoli
    anno() => funzione che restituisce l'anno di pubblicazione
    eventuali funzioni di supporto che potrebbero esservi utili

stampare le pagine totali dei libri
stampare l'elenco dei libri letti
stampare le pagine totali dei libri letti
*/
class libro{
    constructor(nome,autore,letto,dataDiPubblicazione,capitoli) {
        this.nome = nome;
        this.autore = autore;
        this.letto = letto;
        this.dataDiPubblicazione = dataDiPubblicazione;
        this.capitoli = capitoli;
    }
        stampaCopertina() {
            return this.nome + ' - ' + this.autore + ' - ' + this.dataDiPubblicazione;
        }
    
        stampaPagineCapitoli() {
            let myArray = this.capitoli
            for(let i = 0; i< myArray.length; i++) {
                for(let j = 0; j < myArray[i].length; j++) {
                    console.log(myArray[i][j])
                }
            }
        }
        stampaPagineTotali(lista){
            //let myArray = this.capitoli;
            let myArray = lista
            let somma = 0;
            for(let i = 0; i< myArray.length; i++) {
                for(let j = 0; j < myArray[i].length; j++) {
                    somma += myArray.capitoli;
                }
            }
        }
    }
    
    let listaLibri = [
        new libro("il pescatore", "mondadori", "letto", 2000, [[1,4], [2,8]]),
        new libro("Belle donne", "fertinelli", "nonletto", 2009, [[1,4], [2,8]]),
        new libro("Blu Verde Rosso", "zannichelli", "letto", 2005, [[1,4], [2,8]]),
        new libro("Vendetta", "De Agostini", "letto", 2010, [[1,4], [2,8]]),
        new libro("Tremenda", "Treccani", "letto", 2020, [[1,4], [2,8]]),
    ]
    
    //stampaCopertina() => funzione che restituisce una stringa formata da nome + autore + anno
    
    for(i = 0; i < listaLibri.length; i++) {
        let evento = listaLibri[i];
        console.log(evento.stampaCopertina())
    }
    //stampaPagineCapitoli() => funzione stampa il numero di pagine suddivise per capitoli
    for(i = 0; i < listaLibri.length; i++) {
        let libroTemporaneo = listaLibri[i];
        libroTemporaneo.stampaPagineCapitoli()
    }
    //stampare le pagine totali dei libri
    listaLibri.forEach(libro => libro.stampaPagineTotali(libro));

    console.log();
