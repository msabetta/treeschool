/**
 * Creare una lista di oggetti auto. Ogni auto deve contenere: marca, modello (string), 
 * colore(string) e anno produzione(number).  
    AUTO: bmw, 530, blu, 2021
    AUTO: audi, A6, grigia, 2020
    AUTO: mercedes, c200, blu, 1988
    AUTO: fiat, 126, giallo, 1975
    AUTO: mazda, rx8, rossa, 2015
    AUTO: fiat, panda, bianca, 1985
       - Stampare tutte le auto blu.
       - Creare un nuovo array contenente tutti le auto con anno di produzione  > 2000. 
 */

function auto(marca, modello, colore, anno) {
    this.marca = marca;
    this.modello = modello;
    this.colore = colore;
    this.anno = anno;

}

let listAuto = [
    new auto("bmw", "530", "blu", 2021),
    new auto("audi", "A6", "grigia", 2020),
    new auto("mercedes", "c200", "blu", 1988),
    new auto("fiat", "126", "giallo", 1975),
    new auto("mazda", "rx8", "rossa", 2015),
    new auto("fiat", "panda", "bianca", 1985)
];



stampaAutoBlu = function () {
    for (let i = 0; i < listAuto.length; i++) {
        if (listAuto[i].colore = "blu") {
            console.log("MARCA: " + listAuto[i].marca + " MODELLO:" + listAuto[i].modello);
        }
    }
}
console.log("Stampare tutte le auto blu")
stampaAutoBlu();

let listaAutoBlu = listAuto.filter(auto => auto.colore = "blu");
console.log(listaAutoBlu);

console.log("Creare un nuovo array contenente tutti le auto con anno di produzione  > 2000")

let listaAuto2000 = listAuto.filter(auto => auto.anno > 2000);
console.log(listaAuto2000);





