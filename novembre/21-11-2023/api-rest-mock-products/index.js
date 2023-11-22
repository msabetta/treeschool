//const url = 'https://example.com/api/data';
const url = 'https://swapi.dev/api/people/'

const request = {
    method: "GET",
    headers: {
        Accept: "application/json"
    }
};

fetch(url,request)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Dati ottenuti con successo:', data);
    })
    .catch(error => {
        console.error('Errore durante la richiesta GET:', error);
    });
