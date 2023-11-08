function maggioreUguale(numA, numB) {
  return numA >= numB;
}
console.log("100 >= 50 ? " + maggioreUguale(100, 50));
console.log("100 >= 100 ? " + maggioreUguale(100, 100));
console.log("30 >= 50 ? " + maggioreUguale(30, 50));

function divisibile(numA, numB) {
  return numA % numB == 0
    ? console.log(numA + " è divisibile per " + numB)
    : console.log(numA + " non è divisibile per " + numB);
}

divisibile(8, 4);
divisibile(3, 5);

function pari(numA) {
  return numA % 2 == 0
    ? console.log(numA + " è pari")
    : console.log(numA + " è dispari");
}

pari(2);
pari(3);

function myFunc(conditionResult, callbackTrue, callbackFalse) {
  /*     if (condition === true)
            return callbackTrue(condition);
        else
            return callbackFalse(condition); */
  return conditionResult === true
    ? callbackTrue(conditionResult)
    : callbackFalse(conditionResult);
}

console.log("- condition 10 > 100");

myFunc(
  10 > 100,
  function (result) {
    console.log("The result is true");
  },
  function (result) {
    console.log("The result is false");
  }
);

console.log("- condition 200 > 100");

myFunc(
  200 > 100,
  function (result) {
    console.log("The result is true");
  },
  function (result) {
    console.log("The result is false");
  }
);

function isAboveEithteen(age) {
  if (age > 18) {
    console.log("Sei più che maggiorenne vai pure");
    return true;
  } else if (age === 18) {
    console.log("entri per un pelo");
    return false;
  } else {
    // age < 18
    console.log("Mi dispiace, devi avere 18 anni");
    return false;
  }
}

isAboveEithteen(5);
isAboveEithteen(18);
isAboveEithteen(30);

const courseSkills = ["HTML", "CSS", "Javascript"];

let dim = courseSkills.length;

const teacher = { name: "Riccardo", surname: "Silvi", age: 32 };

console.log(teacher.name);

console.log(teacher["age"]);

const jsClass = {
  teacher: {
    name: "Riccardo",
    surname: "Silvi",
    age: 37,
  },
  students: [
    { name: "Andrea", age: 21 },
    { name: "Giancarlo", age: 22 },
  ],
};

console.log(jsClass["teacher"]);
console.log(jsClass["students"]["Andrea"]);

const myHobbies = ["Programming", "Reading", "Surfing", "Sleeping" ];
console.log(myHobbies[3]);

console.log(myHobbies.length);

const myFavouriteBook = {
    title: "Atomic Habits",
    pages: 250,
    topic: "self development"
};

console.log(myFavouriteBook["topic"]);

myFavouriteBook["pages"];

const riccardo = {
    favouriteBook: myFavouriteBook,
    hobbies: myHobbies,
    age: 37
};

console.log(riccardo.favouriteBook.topic);


/*
oggetto
- age  ( number )
- hobbies ( array di oggetti con proprietà name ( string) ,  from ( numero)
- myFavouriteBook (oggetto con proprietà title, pages, isLiked(boolean)
*/

const myFavouriteBook2 = [{title: "Inferno", pages: 300, isLiked: true}, {title: "Divina Commedia", pages: 700, isLiked: false}];

const mySelf = {
    name: "Mario Sabetta", 
    age: 34, 
    hobbies: [{name: "WebDeveloper", from: 2018}, {name: "Engineer", from: 2008}], 
    myFavouriteBooks: [{title: "Il signore degli anelli", pages: 1000, isLiked: true},{title: "Game of Thrones", pages: 800, isLiked: true}]
};