function printArray(myArray){
    for(let i = 0; i < myArray.length; i++) {
        console.log(myArray[i]);
    }
}

function printArray2(myArray){
    for(let i = 0; i < myArray.length; i++) {
        console.log(myArray[i]);
        console.log(myArray[i].charAt(0));
    }
}

export {printArray,printArray2};