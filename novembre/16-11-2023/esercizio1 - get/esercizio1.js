/*
Realizza una pagina web con un pulsante. 
Quando l'utente clicca sul pulsante, esegui una chiamata GET a un API pubblico 
(ad esempio, JSONPlaceholder) per ottenere 
e visualizzare dati sul documento.
*/

async function testChiamata() {
    try {
        let dati = await getUrl("https://jsonplaceholder.typicode.com/todos/1");
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
        console.log("Errore", e);

    } finally {
        console.log("finito");
    }
}


async function getFetch(url) {
    let response = await fetch(url);
    console.log(response)
    return await response.json();
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
        http.open("GET", url, true);
        http.send();
    });
}