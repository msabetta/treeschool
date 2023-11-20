let a = 5;
let b = {
    nome: "Mattia",
    eta: 15
};
let home = `ciao sono ${a} gatti ed hanno ${b.eta} anni `;  //uso di stringhe con backtick
let home2 = "ciao sono " + a + " gatti ed hanno " + b.eta + " anni";

console.log(home)
console.log(home2)


const riccardoGarage = [ volvoCar, x5, punto, pandaFourFour];

// partendo dalle istanze della mia classe Car o Suv ottenere un'array di elementi
const carElements = riccardoGarage.map(prepareCarElement)

function prepareCarElement(elementsArray){
    elementsArray.forEach(el => document.getElementById("cars_list").append(el));

}

function arrayMap(inputArray, callback){
    let resultArray = [];

    for(let i = 0; i < inputArray.length; i++) {
        const callbackResultValue = callback(inputArray[i],i,inputArray);
        resultArray.push(callbackResultValue);
    }

    return resultArray;


}