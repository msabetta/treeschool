// https://www.freecodecamp.org/news/how-to-consume-rest-apis-in-react/

const express = require('express');
const app = express();
const port = 3000;


// Funzione per generare un numero casuale in un intervallo specificato
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funzione per generare un mock di prodotto
function generateProduct(id) {
    const names = ['Prodotto A', 'Prodotto B', 'Prodotto C', 'Prodotto D', 'Prodotto E'];
    const descriptions = ['Descrizione del Prodotto A', 'Descrizione del Prodotto B', 'Descrizione del Prodotto C', 'Descrizione del Prodotto D', 'Descrizione del Prodotto E'];

    const name = names[getRandomNumber(0, names.length - 1)];
    const price = getRandomNumber(10, 100).toFixed(2); // Prezzo casuale tra 10 e 100
    const description = descriptions[getRandomNumber(0, descriptions.length - 1)];
    const stock = getRandomNumber(0, 100);

    return {
        id: id,
        name: name,
        price: price,
        description: description,
        stock: stock,
    };
}



// Creazione di un array di 10 prodotti mock
const mockProducts = Array.from({ length: 10 }, (_, index) => generateProduct(index + 1));

// Trasformare l'array in formato JSON
const jsonMockProducts = JSON.stringify(mockProducts, null, 2);


JSON.

// Stampare l'array di prodotti mock in formato JSON nella console
console.log(jsonMockProducts);


// Endpoint per ottenere l'elenco dei prodotti
app.get('/api/products', (req, res) => {
    res.json(mockProducts);
});

// Avvia il server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});