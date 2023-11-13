const h1Element = document.getElementById("main-title");


h1Element.style.color = "red";

const pTags = document.getElementsByTagName("p");

const pWithUniqueClass = document.getElementsByClassName("unique")[0]; //non usare le classi per beccare un solo elemento, considerare metodi ID

const heroSection = document.getElementById("hero");
const childParagraphs = heroSection.children; // [p,p]
const firstParagraph = childParagraphs[0];
firstParagraph.innerText = "il mio prodotto bellissimo";

//creare ed appendere nuovi elementi
const newButton = document.createElement("button");
newButton.style.backgroundColor = "yellow";
newButton.innerText = "Cliccami sono Giallissimo";

heroSection.appendChild(newButton);

const students = ["Riccardo", "Paolo", "Elena", "Giulia"];


students.forEach(function(name){
    const studentP = document.createElement("p");
    studentP.innerText = name;
    heroSection.appendChild(studentP);
});



//troviamo il riferimento del p che ha il testo "Riccardo" e rimuoviamolo
const riccardoP = "";
for(let i=0; i<heroSection.children.length; i++){
    const element = heroSection.children[i];
    if(element.innerText === "Riccardo"){
        heroSection.removeChild(element);
    }
}


/* const riccardoP = heroSection.children.find(function(el){
    return el.innerText === "Riccardo";
});

if(riccardoP){
    heroSection.removeChild(riccardoP)
} */


console.log("fine");

