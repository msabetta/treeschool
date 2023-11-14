/*
Supponiamo di voler gestire un social per utenti. 
Questo social tiene molto alla privacy dei propri utenti, pertanto ha deciso che nella lista di utenti il loro nome deve essere sostituito 
utilizzando il cifrario di cesare con chiave = 3. Questo significa ad esempio che il nome alfio sarebbe DOINR, perché spostando di 3 lettere A ottengo D; ATTENZIONE, per questo metodo deve essere utilizzata la FUNZIONE MAP.

Per ogni utente possiamo vedere: 
1) tutti i suoi post; 
2) i commenti relativi ad un determinato post; 
3) tutti gli album pubblicati; 
4) per ogni album tutte le foto; 
5) la lista di cose da fare. Solo le cose già fatte devono essere colorate di verde. 
6) inoltre ogni utente può inserire un nuovo post.


La lista di API per effettuare l'esercizio è la seguente:
    - https://jsonplaceholder.typicode.com/users (GET) : lista di tutti gli utenti
    - https://jsonplaceholder.typicode.com/posts?userId=1 (GET) : Lista di tutti i post di un utente con id = 1
    - https://jsonplaceholder.typicode.com/comments?postId=1 (GET): lista dei commenti di un post con id = 1
    - https://jsonplaceholder.typicode.com/albums?userId=1 (GET): Lista di tutti gli album di un utente con id= 1
    - https://jsonplaceholder.typicode.com/photos?albumId=1 (GET): Lista di foto di un album con id=1
    - https://jsonplaceholder.typicode.com/posts (POST): inserimento di un nuovo post. L'oggetto da passare in alla post è il seguente:
        JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        });
    - https://jsonplaceholder.typicode.com/todos?userId=1 lista di cose da fare per l'utente con id
*/

async function test() {
    try {
        console.log("Tutti i post pubblicati")
        let datiAllPosts = await getFetch("https://jsonplaceholder.typicode.com/posts?userId=1");
        console.log(datiAllPosts);

        console.log("\n");
        console.log("I commenti relativi ad un determinato post");
        let datiComments = await getFetch("https://jsonplaceholder.typicode.com/comments?postId=1");
        console.log(datiComments);

        console.log("\n");
        console.log("tutti gli album pubblicati");
        let datiAlbumsPublished = await getFetch("https://jsonplaceholder.typicode.com/comments?postId=1");
        console.log(datiAlbumsPublished);

        console.log("\n");
        console.log("per ogni album tutte le foto");
        let datiFotoAlbum = await getFetch("https://jsonplaceholder.typicode.com/photos?albumId=1");
        console.log(datiFotoAlbum);

        console.log("\n");
        console.log("la lista di cose da fare. Solo le cose già fatte devono essere colorate di verde")
        let datiTodo = await getFetch("https://jsonplaceholder.typicode.com/todos?userId=1");
        let completed = datiTodo.filter(dato => dato.completed == true);
        let bodyTable = document.getElementById('tabella-body');
        //console.log(arrayUtenti);
    
        createHTMLArray = function(arrayUtenti) {
            arrayUtenti.forEach(utente => {
                let tr = document.createElement('tr');
                let td_userId = document.createElement('td');
                td_userId.textContent = utente.userId.toString();
                td_userId.style.textAlign = "center";
                let td_id = document.createElement('td');
                td_id.textContent = utente.id.toString();
                td_id.style.textAlign = "center";
                let td_title = document.createElement('td');
                td_title.textContent = utente.title.trim();
                td_title.style.textAlign = "center";
                let td_completed = document.createElement('td');
                td_completed.textContent = utente.completed;
                td_completed.style.textAlign = "center";
                tr.append(td_userId, td_id, td_title, td_completed);
                bodyTable.appendChild(tr);
            });
            document.getElementById('table').appendChild(bodyTable);
        }

        applyStyle = function (elem) {
            for (let j = 0; j < elem.length; j++) {
                for (let i = 0; i < bodyTable.children.length; i++) {
                    bodyTable.children[i].style.color = "green";
                }
            }
        }

        createHTMLArray(completed);
        applyStyle(completed);


        var xhr = new XMLHttpRequest();
        var url = "https://jsonplaceholder.typicode.com/posts";
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var json = JSON.parse(xhr.responseText);
                console.log(json.email + ", " + json.password);
            }
        };
        var data = JSON.stringify({ "title": "foo", "body": "bar", "userId": 1 });
        xhr.send(data);
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

test();









