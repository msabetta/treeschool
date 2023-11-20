/*
ARROW FUNCTIONS
*/

function sumClassic(numA, numB) {
    return numA + numB;
}

const students = ["Riccardo", "Marco", "Davide"];

const myNewArray = students.map(function (student) {
    return `Ciao Sono ${student}`;
})

const myNewArrayFromArrow = students.map(() => {
    return `Ciao Sono ${students}`;
})


//DIFFERENZE CON LE FUNCTION NORMALI (non è presente la keyword function)
const sumArrow = (numA, numB) => {
    return numA + numB;
}

sumArrow(1, 2);

//ALCUNI PICCOLO ACCORGIMENTI

// ritornare un'espressione javascript a singola riga
// può essere fatto omettendo le graffe
const sumArrowOneLiner = (numA, numB) => numA + numB;

// vale per tutti tranne che per gli oggetti

function createStudent(name, age) {
    return {
        name: name,
        age: age
    }
}

const createStudentArrow = (name, age) => {
    return {
        name: name,
        age: age
    }
}

// se vogliamo ritornare un oggetto senza scrivere manualmente return dentro le graffe
// dobbiamo racchiudere l'oggetto ritornato tra le tonde
const createStudentArrowOneLine = (name, age) => ({ name: name, age: age });


// se ho un singolo argomento posso omettere le tonde attorno ad esso
const myComponent = props => {
    return "Ciao";
}

const myComponent2 = props => "Ciao";

//possiamo ritornare un array dopo la freccia con il return implicito

const myArrayImplicit = () => [1, 2, 3, 4];







