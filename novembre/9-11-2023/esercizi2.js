console.log("Avvio...")
const myStudents = ["paolo", "luca", "francesco", "giada", "gino" ];
debugger;
function arrayMap(myArray, callback){

    //fase 1. nuovo array in cui dovranno finire tanti elementi quanti ce ne sono nell'array originale
    let newArray = [];

    //fase 2. ciclare tutti gli elementi dell'array originale (myArray)
    for(let i=0; i < myArray.length; i++){
       //fase 3. eseguita per ogni elemento dell'array original
        //la callback desidera 3 parametri:
        // parametro 1 - l'elemento dell'array originale per quella iterazione
        // parametro 2 - l'indice della corrente iterazione
        // parametro 3 - array completo originale
        const iterationCallbackResult = callback(
            myArray[i], // parametro 1
            i, // parametro 2
            myArray // parametro 3
        );
        //ora in iterationCallbackResult c'è un valore ritornato
        newArray.push(iterationCallbackResult);
    }
    //fase 4. ritornare il nostro array risultato riempito di elementi ritornati
    // dalle esecuzioni della callback per ogni elemento dell'array myStudents
    return newArray;

    //risultato:
    //- non abbiamo modificato l'array originale myStudents
}

function prefixWithHi(name){
    return "Ciao sono " + name;
    // se non ci fosse un return esplicito, JS ritorna implicitamente il valore undefined
}

//const resultVariable = myStudents.map(prefixWithHi);
/*  map eseguirà la callback per ogni elemento dell'array originale
 *  mentre lo fa mette ogni elemento trasformato
 */
const resultVariable = arrayMap(myStudents, prefixWithHi);

function transformToStudentObject(name){
    const oggetto = {
        name : name,
        subject: "Javascript Class",
        age: name.length * 4
    }
    return oggetto;
}

const resultVariable2 = arrayMap(myStudents, transformToStudentObject);
const originalMapResultWithObject = myStudents.map(transformToStudentObject);

myStudents.forEach(function(name){
    console.log("Ciao sono " + name);
});


const myNumbers = [1,7,8,9,13,15,16,25];
const filtro = myNumbers.filter(function(x){
    return x > 10;
});

console.log(filtro);
