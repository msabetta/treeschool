document.getElementById("title").innerHTML = "Titolo1";
function sum(numA, numB){
    return numA + numB;
}

function multiply(numA, numB){
    return numA * numB;
}

function sumAndMultiply(numA, numB, sumResultMultiplier){
    const sumResult = sum(numA,numB);
    return multiply(sumResult,sumResultMultiplier);
}

function sumAndAddThree(numA,numB){
    const three = 3;
    return numA + numB + three;
}



const myResult = sum(3,5);
const myResult2 = sumAndMultiply(1, 3, multiply(10,8));
console.log("la somma è " + myResult);
console.log("Somma e moltiplica " + myResult2);


//callback (definizione funzione)
function concatStringWithCallback(nextString, myCallback){
    const fullString = "Bellaaaaa " + nextString; 
    myCallback(fullString);
    return fullString;
}

//callback(richiamo la funzione)
concatStringWithCallback("Mario", function(inputString){
    console.log(inputString);
});


array = [1,2,3,4,5];
array.forEach(element => {
    console.log(element);
});






