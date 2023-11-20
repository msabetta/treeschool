//import "XMLHttpRequest";

// Questa funzione viene chiamata quando si vuole effettuare una chiamata POST
function effettuaChiamataPOST(event) {
    // Previeni il comportamento predefinito del form per evitare il ricaricamento della pagina
    event.preventDefault();

    // Raccogli i dati dal form
    const formData = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    };

    // Usa la funzione fetch per fare una richiesta POST a un endpoint specifico
    fetch('https://jsonplaceholder.typicode.com/posts', {
        // Specifica che questa è una richiesta POST
        method: 'POST',
        // Specifica l'intestazione Content-Type come application/json
        headers: {
            'Content-Type': 'application/json'
        },
        // Converte l'oggetto formData in una stringa JSON e la invia nel corpo della richiesta
        body: JSON.stringify(formData)
    })


        // Quando la risposta è disponibile, converti il corpo della risposta in formato JSON
        .then(response => response.json())
        // Quando i dati JSON sono disponibili, aggiorna un elemento HTML con quei dati
        .then(data => {
            // Trova un elemento HTML con l'id 'risultatoPOST' e aggiorna il suo testo con i dati JSON formattati
            document.getElementById('risultatoPOST').textContent = JSON.stringify(data, null, 2);
        })
        // Se si verifica un errore durante la richiesta, mostra un messaggio di errore nella console
        .catch(error => console.error('Errore durante la chiamata POST:', error));
}

async function testChiamata() {
    try {
        let dati = await getUrl("https://jsonplaceholder.typicode.com/posts");
        //let dati = await getFetch("https://jsonplaceholder.typicode.com/todos/1");
        console.log(dati);
        //dati.then(response => response.json()).then(json => console.log(json));
        /*      let info = fetch("https://jsonplaceholder.typicode.com/todos/1")
                 .then(response => response.json())
                 .then(json => console.log(json)); */

        let par = document.getElementById('par');
        //par.innerText = response.toString();
        par.innerText = JSON.stringify(dati, null, 2);
        console.log();

    } catch (e) {
        console.error("Errore", e);

    } finally {
        console.log("finito");
    }
}

function getUrl(url) {
    return new Promise(function (resolve, reject) {
        let http = new XMLHttpRequest();

        http.onreadystatechange = function () {
            let data;
            if (http.readyState == 4) {
                if (http.status == 200) {
                    data = JSON.parse(http.responseText);
                    resolve(data);
                } else {
                    reject(new Error(http.statusText));
                }
            }
        }
        http.open("POST", url, true);
        http.send();
    });
}