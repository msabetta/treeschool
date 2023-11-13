console.log("Funziona")



function arrayFilter(myArray, callback) {
    //1. ritorniamo un array anche se nessuno dell'array originale passa il test
    let filteredArray = [];

    //2. cicliamo per tutti gli elementi dell'array originale, eseguiamo la
    //callback function da cui ci attendiamo un return true/false

    for (let i = 0; i < myArray.length; i++) {
        const shouldAddToResultArray = callback(
            myArray[i],  //1 elemento iterazione
            i,           //2. indice iterazione
            myArray      //3. array originale completo
        );    

        // 3. ritorniamo il nuovo array popolato come da regole precedenti
        //se la callback function torna:
        // - true => inseriamo l'elemento per quell'iterazione nell'array risultato
        // - false => non inseriamo l'elemento per quell'iterazione nell'array risultato (non necessario)
        if (shouldAddToResultArray) {
            filteredArray.push(myArray[i])
        }
    }
    return filteredArray;
}

const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);


function checkAdult(age) {
    return age >= 18;
}

debugger;

const resultCustom = arrayFilter(ages, checkAdult);
const resultOriginal = ages.filter(checkAdult);
