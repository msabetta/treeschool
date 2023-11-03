function maggioreUguale(numA, numB) {
    return numA >= numB;
}
console.log("100 >= 50 ? " + maggioreUguale(100, 50))
console.log("100 >= 100 ? " + maggioreUguale(100, 100))
console.log("30 >= 50 ? " + maggioreUguale(30, 50))

function divisibile(numA, numB) {
    return numA % numB == 0 ? console.log(numA + " è divisibile per " + numB) : console.log(numA + " non è divisibile per " + numB);
}

divisibile(8, 4);
divisibile(3, 5);

function pari(numA) {
    return numA % 2 == 0 ? console.log(numA + " è pari") : console.log(numA + " è dispari");
}

pari(2);
pari(3);


function myFunc(condition, callbackTrue, callbackFalse) {
    if (condition === true)
        return callbackTrue(condition);
    else
        return callbackFalse(condition);
}

console.log("- condition 10 > 100");

myFunc(10 > 100, function (result) {

    console.log("The result is true");

}, function (result) {

    console.log("The result is false");

});

console.log("- condition 200 > 100");

myFunc(200 > 100, function (result) {

    console.log("The result is true");

}, function (result) {

    console.log("The result is false");

});