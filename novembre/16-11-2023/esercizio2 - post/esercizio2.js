/*
Crea una pagina con un modulo di login che raccoglie username e password. 
Quando l'utente invia il modulo, effettua una chiamata POST a un endpoint di un server 
(simulato con un servizio come MockAPI) con i dati del modulo
*/



const formdata = {
    username: document.getElementById('username').value,
    password: document.getElementById('password').value
};

async function login() {
    try {
        let dati = await getUrl("https://jsonplaceholder.typicode.com/posts");
        //let dati = await getFetch("https://jsonplaceholder.typicode.com/posts");
        console.log(dati);
        //dati.then(response => response.json()).then(json => console.log(json));
/*         let info = fetch("https://jsonplaceholder.typicode.com/posts")
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

    //event.preventDefault();

    let response = await fetch(url,{method: 'POST',
        headers: { 'content-type': 'application/json' },
    // Send your data in the request body as JSON
        body: JSON.stringify(formdata)
    }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
    }).then(task => {
        // do something with the new task
        console.log(task);
    }).catch(error => {
        // handle error
        console.log(error);
    })
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
        //http.open("GET", url, true);
        http.send();
    });
}