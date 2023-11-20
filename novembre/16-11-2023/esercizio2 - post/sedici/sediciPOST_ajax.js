console.log("metodo post ajax"); 

function effettuaChiamataPOST() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var url = 'https://mockapi.io/api/v1/login'; // Sostituisci con il tuo URL reale

    // Dati da inviare nel corpo della richiesta
    var data = {
        username: username,
        password: password
    };

    // Configura l'opzione della richiesta
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    // Esegui la chiamata fetch
    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            // Gestisci la risposta del server
            document.getElementById('risultatoPOST').innerHTML = '<p>Login effettuato con successo!</p>';
        })
        .catch(error => {
            // Gestisci gli errori
            document.getElementById('risultatoPOST').innerHTML = '<p>Errore durante il login.</p>';
            console.error('Errore:', error);
        });

    // Impedisce il comportamento predefinito del modulo di login
    return false;
}
