async function logMovies() {
    const response = await fetch("https://swapi.dev/api/films");
    const films = await response.json();
    console.log(movies);
    return films;
}

//logMovies();

// class Request{
//     constructor(body,headers,status){
//         this.body = body;
//         this.headers = headers;
//         this.status = status;
//     }
// }



/*
ragazzi dimenticavo, charachters vi da un'array di stringhe
tipo

"characters": [
        "https://swapi.dev/api/people/1/",
        ...
    ],

fingiamo che chewbacca sia la stringa
"https://swapi.dev/api/people/2/"


LINK USING FETCH
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_json_data

    LINK SWAPI
https://swapi.dev/documentation#films
*/


/* 
async function fetchMovieByIdAndCheckChewbacca(id) {
    try {
        // const response = await fetch(`https://swapi.dev/api/films/${id}`, {
        //     method: "POST", // or 'PUT'
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     //body: JSON.stringify(data),
        // });
        const response = await fetch(`https://swapi.dev/api/films/${id}`);

        const movie = await response.json();
        console.log("Success:", movie);
        const chewbacca = "https://swapi.dev/api/people/2/";
        //find : se la callback ritorna true il risultato di find è l'elemento relativo, altrimenti (false) è undefined
        const foundChewbacca = movie.characters.find(function(c){
            return chewbacca === c;
        });
        //throw new Error("Facciamo un esempio di errore");
        
        return foundChewbacca !== undefined;


    } catch (error) {
        console.error("Error:", error);
    }
}

//const data = { username: "example" };


//SINTASSI VECCHIA CON THEN-CATCH (PROMISE)
let stato = fetchMovieByIdAndCheckChewbacca(1)
    .then(function (isTrue) {
        if (isTrue) {
            console.log("Chewbacca is here!");
        } else {
            console.log("Chewbacca is not here!");
        }
    })
    .catch(function (error) {
        console.log("errore", error);
    })


//SINTASSI CON ASYNC-AWAIT
async function logIfChewbaccaIsInMovie(id) {
    try {
        const isTrue = await fetchMovieByIdAndCheckChewbacca(1)
        if (isTrue) {
            console.log("Chewbacca is here!");
        } else {
            console.log("Chewbacca is not here!");
        }
    } catch (error) {
        console.log("errore", error);
    }
}
 */



/* function fetchMovieByIdOldStyle(id) {
    const url = `https://swapi.dev/api/films/${id}`;
    const movie = fetch(url)
        .then(function (res){
            return res;
        })
        .catch (function (e) {
            console.log("errore",e)
        })
        
} */




/*
Utilizzando fetchMovieById 1
se non ci sono errori nella chiamata stampo un'ul nel DOM
con tutti i "planets" ( ogni planet è in un tag li)
mostriamo sopra alla lista un tag h1 con il titolo del film (title)
e il numero di episodio ( episode_id )
se c'è un'errore mostriamo nel DOM un testo che segnala che c'è stato 
un'errore
in ogni caso ( nel finally ) alla fine 
mostrare un h3 con scritto "è bello conoscere altri appassionati"
*/
async function fetchMovieById(id) {
    try {
        const response = await fetch(`https://swapi.dev/api/films/${id}`);

        const movie = await response.json();
        console.log("Success:", movie);
    } catch (e) {
        console.log("Errore", e);
    }

}


async function fetchMovieByIdAndCheckChewbaccaPlanets(id) {
    try {
        // const response = await fetch(`https://swapi.dev/api/films/${id}`, {
        //     method: "POST", // or 'PUT'
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     //body: JSON.stringify(data),
        // });
        const response = await fetch(`https://swapi.dev/api/films/${id}`);

        const movie = await response.json();
        console.log("Success:", movie);
        const chewbacca = "https://swapi.dev/api/planets/1/";
        //find : se la callback ritorna true il risultato di find è l'elemento relativo, altrimenti (false) è undefined
        const foundChewbacca = movie.planets.find(function(c){
            return chewbacca === c;
        });
        //throw new Error("Facciamo un esempio di errore");

        let isPresent = movie.planets.includes(chewbacca);

        if (isPresent) {
            let list = document.getElementById('planets_list');
            
            
            
            let p = document.createElement('p');
            h1.innerText = movie.title;
            p.innerText = movie.episode_id;


        }
        
        
        
        return foundChewbacca !== undefined;


    } catch (error) {
        console.error("Error:", error);
        let message = document.createElement('p');
        message.innerText = "Errore";

    }
}

async function logIfChewbaccaIsInMoviePlanets(id) {
    try {
        const isTrue = await fetchMovieByIdAndCheckChewbaccaPlanets(1)
        if (isTrue) {
            console.log("Chewbacca is here!");
            


        } else {
            console.log("Chewbacca is not here!");
        }
    } catch (error) {
        console.log("errore", error);
    }
}

logIfChewbaccaIsInMoviePlanets(1);
console.log();




async function printPlanets(id) {
    try {
        const movie = await fetchMovieById(id);
        const ulElement = document.getElementById('planets_list');
        if(ulElement){
            ulElement.innerHTML = "";
        }
        movie.planets.forEach(function(planet){
            const liElement = document.createElement('li');
            liElement.innerText = planet; //"https://swapi.dev/api/planets/1/"
            ulElement.append(liElement);
        });

        const h1Element = document.getElementById("title");
        h1Element.innerText = `Titolo: ${movie.title}, id episodio: ${movie.episode_id}`;
        
    } catch (e) {
        console.log(e);
        const pElement = document.getElementById('error_text');
        pElement.innerText = "qualcosa è andato storto";
        
    } finally {
        const h3Element = document.getElementById("finally");
        h3Element.style.display = "block";
    }
}

printPlanets(1);




