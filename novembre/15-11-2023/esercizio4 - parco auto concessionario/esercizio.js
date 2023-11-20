/*
Concessionario

classe

proprietà
- parco auto (array di auto)
- clienti registrati  (array di stringhe) -> per chi fosse veloce anche una classe Customer ci piace

funzionalità
- lista auto ( console.log )
- vendita
  -> se il cliente è registrato i Suv sono disponibili
  -> stampa a in un elemento html le caratteristiche della macchina comprata

  -> se non lo sei puoi solo comprare il resto ( istanza di Car e non di Suv)
  -> comunicami con un alert che non posso comprare perchè mi devo prima registrare

 - registraCliente
  -> chiedete il nome 
  -> aggiungete alla lista dei clienti
  
*/
class Car {
    // name
    // color
    // brand
    // fuelLevel -> valore da 1 a 100

    // questo è ciò che viene chiamato quando 
    // faccio new Car()
    // gli argomenti che passo a new Car()
    // sono ricevuti qui
    constructor(name, color, brand, fuelLevel = 0) {
        this.name = name;
        this.color = color;
        this.brand = brand;
        this.fuelLevel = fuelLevel;
        this.type = "Car";
    }

    horn() {
        return "Meeeeeee";
    }

    refuel(fuelAmount) {
        if (fuelAmount === 100) {
            return "No need to fill me up!"
        }
        if ((this.fuelLevel + fuelAmount) > 100) {
            return "You are overfueling me! Stop!"
        }
        this.fuelLevel += fuelAmount
        return this.fuelLevel
    }

}


class Suv extends Car {

    constructor(name, color, brand, fuelLevel = 0) {
        super(name, color, brand, fuelLevel);
        this.type = "Suv";
    }

    /*     constructor(name, color, brand, fuelLevel) {
            super(name, color, brand, fuelLevel)
        } */

    // override
    // sovrascrittura di una funzionalità
    horn() {
        return "Meeee, I'm higher than you!";
    }

    /*     constructor(available) {
            this.available = available;
        } */
}


class Customer {
    constructor(name, surname, isRegistered) {
        this.name = name;
        this.surname = surname;
        this.isRegistered = isRegistered;
    }

}


class Concessionario {
    //let arrayAuto = new Auto();
    //let clientiRegistrati;  // array di stringhe, per chi fosse veloce anche una classe Customer

    //-> lista_auto() tramite console.log
    //-> vendita() se il cliente è registrato i suv sono disponibili, altrimenti puoi solo comprare il resto
    //-> stampa in html le caratteristiche della macchina comprata, altimenti comunica con un alert che non posso
    //   comprare perchè mi devo prima registrare
    //-> registraCliente = chiedete il nome ed aggiungete alla lista dei clienti

    constructor(listaAuto, clientiRegistrati) {
        this.listaAuto = listaAuto;
        this.clientiRegistrati = clientiRegistrati;
    }

    getListaAuto() {
        this.listaAuto.forEach(car => console.log(car));
    }

    vendita(nomeCliente, nomeAuto) {

        const isRegisteredCliente = this.clientiRegistrati.includes(nomeCliente);

        /*         if (this.clientiRegistrati != undefined) {
                    console.log("I suv sono disponibili!");
        
                } else {
                    console.log("Sono disponibili altre auto");
                } */

        const foundSuv = this.cars.suvs.find(function (suv) {
            return suv.name === nomeAuto
        })

    }

    stampaAutoAcquistata(autoAcquistata) {
        let p = document.createElement('p');
        p.innerText = `Acquistata auto: ${autoAcquistata.nome} ${autoAcquistata.color} ${autoAcquistata.brand} ${autoAcquistata.fuelLevel}`
    }

    registraCliente(nomeCliente) {
        this.clientiRegistrati = this.clientiRegistrati.concat([nomeCliente]);
    }


}


let listaAuto = [
    new Car("Golf", "grey", "Wolfswagen", 20),
    new Car("156", "red", "Alfa Romeo", 20),
    new Car("Classe A", "yellow", "Mercedes", 10),
    new Car("Punto", "grey", "Fiat", 0),
    new Car("Ibiza", "white", "Seat", 15),
    new Suv("FordExplorer", "white", "Ford", 15, true),
    new Suv("Fiat500X", "white", "Fiat", 30, false),
    new Suv("RenaultCaptur", "white", "Renault", 5, false)
];

let customers = [
    new Customer("Mario", "Rossi", true),
    new Customer("Giacomo", "Raspadori", false),
    new Customer("Marco", "Gambelli", false),
    new Customer("Giovanni", "Capretti", true),
    new Customer("Lucia", "Corna", false),
    new Customer("Marco", "Zambelli", false)
];

const autoInizialiConcessionario = {
    utilitarie: [volvoCar, punto],
    suvs: [x5, pandaFourByFour]
}

let concessionario = new Concessionario(listaAuto, customers);






