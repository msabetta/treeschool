console.log("funziona")

function arrayForEach(newArray, callback){

    //1. non ritorna nessun risultato
    //2. cicla su tutti gli elementi dell'array
    //3. per ogni elemento esegue la callback ma del risultato (evenntuale) della callback non devo farmene nulla
    
    for (let i = 0; i < newArray.length; i++){

        callback(newArray[i],i,newArray);
    }

    //la funzione in questo caso ritorna undefined se il return non è specificato (importante!)

}

const myStudents = ["paolo", "luca", "francesco" ];

function logToConsole(text, index){
    console.log("index " + index + " text " + text);
    return "fai qualcosa con " + text;
}

const customForEach = arrayForEach(myStudents, logToConsole);


console.log("uso di forEach (classico):")
const realForEach = myStudents.forEach(logToConsole);