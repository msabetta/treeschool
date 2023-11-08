function myFunc(conditionResult, callbackTrue, callbackFalse) {
/*     if (condition === true)
        return callbackTrue(condition);
    else
        return callbackFalse(condition); */
    return conditionResult === true ? callbackTrue(conditionResult) : callbackFalse(conditionResult);
}

console.log("- condition 10 > 100");

myFunc(10 > 100, function(result) {

    console.log("The result is true");

}, function(result) {

    console.log("The result is false");

});

console.log("- condition 200 > 100");

myFunc(200 > 100, function(result) {

    console.log("The result is true");

}, function(result) {

    console.log("The result is false");

});
