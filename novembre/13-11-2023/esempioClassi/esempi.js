class Persona {
    constructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
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
}


let persona = new Persona("Mario", "Rossi");
console.log(persona.getNome());
console.log(persona["cognome"]);
console.log(persona);
persona.setNome("Christian").setCognome("Cibelli");
console.log(persona.nome, persona.cognome);

for (let item in persona) {
    console.log(item);
}
