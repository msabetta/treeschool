import products from "./mock.json" assert {type: "json"};
//import products from "./mock.json";

/* try {

    const products = import('./mock.json', {
        assert: {
            type: 'json'
        }
    });
} catch (e) {
    if(e.includes("SyntaxError")){
        fetch("./mock.json")
        .then((res) => res.json())
        .then((data) => {
            // do stuff with the data
        });
    }

    if(e.includes("ReferenceError")){
        const products = $.getJSON("mock.json", function(json) {
            console.log(json); // this will show the info it in firebug console
        });
    }
} */


console.log(products);
console.log(products.productsList);
//console.log(products.productsList.length);
//console.log(products.productsList[1]);

const shortList = products.productsList.filter((prod) => prod.id < 6);

console.log(shortList);

console.log("print prods of productList using map")
products.productsList.map((prod) => {
    if (prod.id < 6) {
        console.log(prod);
    }
});
console.log("print prods of shortList using map")
shortList.map(prod => console.log(prod));

//Esercizio 1 dato il mock di partenza, stampa in console la lista dei prodotti;
console.log("Esercizio 1 dato il mock di partenza, stampa in console la lista dei prodotti");
products.productsList.map((prod) => {
    console.log(prod);
});

//Esercizio 2 dato il mock di partenza, stampa in console il terzo oggetto della lista dei prodotti, cioé le cuffie...
console.log("Esercizio 2 dato il mock di partenza, stampa in console il terzo oggetto della lista dei prodotti, cioé le cuffie...");
const objectFiltered = products.productsList.filter((prod) => prod.name.includes("Cuffie"));
console.log(objectFiltered)

//Esercizio 3 dato il mock di partenza, stampa in console la lista dei prodotti che costano meno di 200 euro
console.log("Esercizio 3 dato il mock di partenza, stampa in console la lista dei prodotti che costano meno di 200 euro");

const objectFiltered2 = products.productsList.filter((prod) => prod.price < 200);
console.log(objectFiltered2)

//Esercizio 4 dato il mock di partenza, stampa in console il prodotto con id 8, (ATTENZIONE:come oggetto non come lista)
console.log("Esercizio 4 dato il mock di partenza, stampa in console il prodotto con id 8, (ATTENZIONE:come oggetto non come lista)");
const objectFiltered3 = products.productsList.filter((prod) => prod.id === 8);
console.log(objectFiltered3)

//Esercizio 5 dato il mock di partenza, stampa in console solo i nomi dei prodotti presenti nel mock
console.log("Esercizio 5 dato il mock di partenza, stampa in console solo i nomi dei prodotti presenti nel mock")
products.productsList.map((prod) => {
    console.log(prod.name);
});

