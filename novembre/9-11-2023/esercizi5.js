let array = [1,23,2,6,3,1];

// molt * 10

let arrayMap = array.map(pippo => pippo * 10);

function funzioneMap(val){
    val *= 10;
    val += 5;
    return val;
}


let array2 = array.map(funzioneMap);
console.log(array2);


let arrayMap2 = array.map(pippo => {
    pippo = pippo * 10;
    pippo = pippo + 5;
    return pippo;
});

console.log(arrayMap2);

let arrayMap3 = array.map(function(pippo) {
    pippo = pippo * 10;
    pippo = pippo + 5;
    return pippo;
});

console.log(arrayMap3);


