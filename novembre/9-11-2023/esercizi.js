const myStudents = ["paolo", "luca", "francesco", "giada", "girolamo" ]

function prefixWithHi(name){
    return "Ciao sono " + name;
}

const resultVariable = myStudents.map(prefixWithHi);
/*  map eseguirà la callback per ogni elemento dell'array originale mentre lo fa mette ogni elemento trasformato
 */

function transformToStudentObject(name){
   debugger
   const oggetto = {
       name : name,
       subject: "Javascript Class",
       age: name.length * 4
   }
   return oggetto;
}

//const result = transformToStudentObject("Riccardo");

const newArray = myStudents.map(transformToStudentObject);

console.log("array risultato: ", myStudentsWithObjects);

function myFunction(){
    let myValue = "Ciao Sono Riccardo";
    return myValue;
}




