const students = ["Paolo", "Mario", "Mirco", "Fabio"];

//primo modo
function arrayMap(myArray, elementCallback){
    let resultArray = [];
    for(let i=0; i<myArray.length; i++){
        const elementAtIndex = myArray[i];
        const nextResultArrayElement = elementCallback(elementAtIndex);
        resultArray.push(nextResultArrayElement);
    }
    return resultArray;
}

const eChiari = arrayMap(students, function(name){
    return name + " E Chiaro";
});

console.log(eChiari);

//secondo modo
console.log(students.map(function(name){
    return name + " E Chiaro";
}));


function arrayMap2(myArray, elementCallback){
    let resultArray = [];
    for(let i=0; i<myArray.length; i++){
        const elementAtIndex = myArray[i];
        const nextResultArrayElement = elementCallback(elementAtIndex, i, myArray);
        resultArray.push(nextResultArrayElement);
    }
    return resultArray;
}

console.log(students.map(function(name,index,fullArray){
    return {id: index + 1, name: name}
}));

console.log("- arrayForEach");
function arrayForEach(myArray,elementCallBack){
    for(let i=0; i<myArray.length;i++){
        elementCallBack(myArray[i]);
    }
}

arrayForEach(students, function(name){
    console.log(name);
});

console.log("- forEach");
students.forEach(function (name){console.log(name)});