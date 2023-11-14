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

async function testChiamata() {
    try {
        let dati = await getUrl("https://jsonplaceholder.typicode.com/posts/1");
        //let dati = await getFetch("https://jsonplaceholder.typicode.com/posts/1");
        console.log(dati);

    } catch (e) {
        console.log("Errore", e);

    } finally {
        console.log("finito");
    }
}

testChiamata();

async function getFetch(url) {
    let response = await fetch(url);
    console.log(response)
    return await response.json();
}

//console.log(getFetch);