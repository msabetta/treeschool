/**
 * Creare una entità persona con nome Marco, cognome Rossi, età 32 anni. 
 * Creare un’altra entità persona con nome Francesca, cognome Leotta, età 34 anni. 
 * Stampare il nome e cognome della persona più anziana. 
 * Aggiungere ad ogni persona la proprietà sesso, rispettivamente M e F. Stampare le entità femminili. 
 */

class Persona {
    constructor(nome, cognome, età) {
        this.nome = nome;
        this.cognome = cognome;
        this.età = età;
    }

    static getNome() {
        return this.nome;
    }

    setNome(nome) {
        this.nome = nome;
    }
    static getCognome() {
        return this.cognome;
    }

    setCognome(cognome) {
        this.cognome = cognome;
    }
    static getEtà() {
        return this.età;
    }

    setEtà(età) {
        this.età = età;
    }
}

/* let persona1 = {
    nome: "Marco",
    cognome: "Rossi",
    età: 32
}; */

let persona1 = new Persona("Marco", "Rossi", 32);

/* let persona2 = {
    nome: "Francesca",
    cognome: "Leotta",
    età: 34
}; */

let persona2 = new Persona("Francesca", "Leotta", 34);

let arrayPersone = [
    {
        nome: "Marco",
        cognome: "Rossi",
        età: 32
    },
    {
        nome: "Francesca",
        cognome: "Leotta",
        età: 34
    }
];

if (persona1.età > persona2.età) {
    console.log(persona1.nome + " " + persona1.cognome);
} else {
    console.log(persona2.nome + " " + persona2.cognome);
}


//metodo alternativo

function persona(nome,cognome,età) {

    this.nome = nome;
    this.cognome = cognome;
    this.età = età;
    this.stampaNome = function () {
        console.log("NOME: " + this.nome + " COGNOME: " + this.cognome);
    }
}

let perso1 = new persona("marco", "rossi", 32);
let perso2 = new persona("francesca", "leotta", 34);
perso1.stampaNome();
console.log(perso1);
perso1.sesso = "M";
perso2.sesso = "F";
console.log(perso1);
console.log(perso2);

let perso3 = new persona("lucia","bella", 62);
perso3.sesso = "F";


function verifySes(personaTmp){
    if(personaTmp.sesso == "F"){
        personaTmp.stampaNome();
        console.log(" -- la persona e' di sesso femminile");
    }
}

verifySes(perso1);
verifySes(perso2);
verifySes(perso3);
