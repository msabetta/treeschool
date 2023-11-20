// Classe

// Blueprint -> Stampino -
// Una specifica di: 
// proprietà
// comportamenti

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
        this.fuelLevel = fuelLevel
        this.type = "Car"
    }

    horn() {
        return "Meeeeeee"
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

// volvoCar è un'istanza ( il prodotto ) della specifica 
// rappresentata dalla classe Car
const volvoCar = new Car("XC40", "Blue", "Volvo")

volvoCar.brand = "BMW"

console.log(volvoCar.horn())

class Suv extends Car {
    /*
    constructor(name, color, brand, fuelLevel = 0){
        super(name, color, brand, fuelLevel)
        this.type = "Suv"
    }
    */
    constructor(name, color, brand, fuelLevel) {
        super(name, color, brand, fuelLevel)
    }

    // override
    // sovrascrittura di una funzionalità
    horn() {
        return "Meeee, I'm higher than you!"
    }
}

const x5 = new Suv("X5", "Red", "BMW", 0)
console.log(x5.horn())
console.log(x5.refuel(1))

const punto = new Car("Punto", "White", "Fiat")
const pandaFourByFour = new Suv("Panda", "Green", "Fiat")

// crea elemento da appendere al DOM
function prepareCarElement(car) {

    // crea il nostro elemento
    const el = document.createElement("li");

    // andiamo a riempire il suo innerText
    el.innerText = `Auto ${car.name}, brand ${car.brand}, color ${car.color}` // backticks

    //ritorniamo
    return el;

}

// prendere degli elementi preparati
// e appenderli alla nostra ul
function createCarDOMElements(elementsArray) {
    elementsArray.forEach(function (el) {
        document.getElementById("cars_list").append(el)
    })
}

const riccardosGarage = [
    volvoCar,
    x5,
    punto,
    pandaFourByFour
]

// partendo dalle istanze della mia classe Car o Suv
// ottenere un'array di elementi
//const carElements = riccardosGarage.map(prepareCarElement)

function arrayMap(inputArray, callback) {

    // ritornare un nuovo array
    let resultArray = []

    // cicla su tutti gli elementi dell'array di origine
    for (let i = 0; i < inputArray.length; i++) {
        // per ogni elemento dell'array originale
        // esegue la callback e ne mette il valore ritornato
        // nell'array risultato
        const callbackResultValue = callback(
            inputArray[i], // elemento a iterazione corrente
            i, // indice dell'iterazione corrente
            inputArray // array originale
        )
        resultArray.push(callbackResultValue)
    }
    return resultArray

}

const carElements = arrayMap(riccardosGarage, prepareCarElement)

createCarDOMElements(carElements)

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

class CarDealer {
    constructor(cars, customers) {
        this.cars = cars;
        this.customers = customers;
    }

    sell(customerName, carName) {
        const isRegisteredCustomer = this.customers.includes(customerName); // return boolean
        // distinguere se l'auto richiesta è un Suv o meno
        // 1 - inserire una proprietà "type" sulle classi
        // 2 - cars è un'oggetto con chiavi il tipo di mezzo e valori un'array di quei mezzi
        const foundSuv = this.cars.suvs.find(function (suv) {
            return suv.name === carName
        })
        const customerWantsToBuySuv = foundSuv !== undefined

        if (
            (customerWantsToBuySuv && isRegisteredCustomer)
            || (!customerWantsToBuySuv)) {
            // ok puoi acquistare
            const purchasedElement = document.getElementById("purchased_feedback");
            purchasedElement.innerText = `Great pick! Here's your ${carName} ${customerName}`
            purchasedElement.style.display = "block";
            return
        }
        // non puoi comprare 
        alert(`We are sorry ${customerName}, You must register to buy an Suv`)

    }

    listCars() {
        //console.log(this.cars)
        this.cars.forEach(function (element) {
            console.log(element)
        })
    }

    registerCustomer(name) {
        this.customers = this.customers.concat([name])
    }
}

const initialCarDealerCars = {
    regularCars: [volvoCar, punto],
    suvs: [x5, pandaFourByFour]
}

//const intitialCars = [{ name: volvoCar.name, brand: volvoCard.brand}]

const initialCardDealerCustomers = [
    "Davide",
    "Riccardo",
    "Giada"
]

const myDealer = new CarDealer(
    initialCarDealerCars,
    initialCardDealerCustomers
)

myDealer.sell("Giulia", "X5") // no purchase

myDealer.sell("Riccardo", "Panda") // can purchase
