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



/* async function fetchMovieByIdAndCheckChewbaccaPlanets(id) {
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
            p.innerText = movie.title;
            p.innerText = movie.episode_id;


        }
        
        
        
        return foundChewbacca !== undefined;


    } catch (error) {
        console.log("Error:", error);
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


function getOrCreateElementById(id,tagName, callback){
    const foundElement = document.getElementById(id);
    if(foundElement){
        callback(foundElement);
        return;
    }
    const newElement = document.createElement(tagName)
    const manipulatedElement = callback(newElement);
    //rootElement.append(manipulatedElement);

} */


/* async function printPlanets(id) {
    try {
        const movie = await fetchMovieById(id);
        const rootElement = document.getElementById("root");


        getOrCreateElementById("title","h1", function(h1Element){
            h1Element = document.createElement("h1");
            //h1Element.innerText = `Titolo: ${movie.title}, id episodio: ${movie.episode_id}`;
            h1Element.innerText = `Titolo: ${props.movieTitle}, id episodio: ${props.movieEpisodeId}`;
            return h1Element;
        });


        getOrCreateElementById("planets_list","ul", function(ulElement){
            ulElement = document.createElement("planets_list");
            ulElement.innerHTML = "";
            return ulElement;
        });

        movie.planets.forEach(function(planet){
            const liElement = document.createElement('li');
            liElement.innerText = planet; //"https://swapi.dev/api/planets/1/"
            ulElement.append(liElement);
            return planet;
        });

        
    } catch (e) {
        console.log(e);
        //const pElement = document.getElementById('error_text');
        const pElement = document.createElement("p");


        getOrCreateElementById("error_text","p", function(pElement){
            pElement.innerText = "qualcosa è andato storto";
            return pElement;
        });
        
    } finally {
        const h3Element = document.createElement("h3");

        getOrCreateElementById("finally","h3", function(h3Element){
            h3Element.style.display = "block";
            h3Element.innerText = "è bello cooscere altri appassionati";
            return h3Element;
        });

    }
}

printPlanets(1); */

function getOrCreateElementById(id,tagName, callback){
    const rootElement = document.getElementById("root")
    const foundElement = document.getElementById(id);
    if(foundElement){
        callback(foundElement);
        return;
    }
    const newElement = document.createElement(tagName)
    const manipulatedElement = callback(newElement);
    rootElement.append(manipulatedElement);
    return document.getElementById(id);
}


function renderError(props) {
    getOrCreateElementById("error_text", "p", function (pElement) {
        pElement.innerText = "qualcosa è andato storto";
        return pElement;
    });
}

function renderGreeting() {
    getOrCreateElementById("finally", "h3", function (h3Element) {
        h3Element.style.display = "block";
        h3Element.innerText = "è bello conoscere altri appassionati";
        return h3Element;
    });
}

function renderTitle(props) {
    getOrCreateElementById("title", "h1", function (h1Element) {
        h1Element = document.createElement("h1");
        //h1Element.innerText = `Titolo: ${movie.title}, id episodio: ${movie.episode_id}`;
        h1Element.innerText = `Titolo: ${props.movieTitle}, id episodio: ${props.movieEpisodeId}`;
        return h1Element;
    })
}


function renderDirector(props) {
    getOrCreateElementById("director", "h2", function (h2Element) {
        h2Element = document.createElement("h2");
        //h1Element.innerText = `Titolo: ${movie.title}, id episodio: ${movie.episode_id}`;
        h2Element.innerText = `Director: ${props.movieDirector}`;
        return h2Element;
    })
}

function renderProducer(props) {
    getOrCreateElementById("director", "h3", function (h3Element) {
        h3Element = document.createElement("h3");
        //h1Element.innerText = `Titolo: ${movie.title}, id episodio: ${movie.episode_id}`;
        h3Element.innerText = `Producer: ${props.movieProducer}`;
        return h3Element;
    })
}

function renderOpeningCrawl(props) {
    getOrCreateElementById("opening_crawl", "p", function (pElement) {
        pElement.innerText = props.movieOpeningCrawl;
        return pElement;
    });
}

function renderPlanets(props) {

    const ulElement = getOrCreateElementById("planets_list", "ul", function (ulElement) {
        ulElement.id = "planets_list";
        ulElement.innerHTML = ""
        return ulElement;
    })

    props.planets.forEach(function (planet) {
        const liElement = document.createElement('li');
        liElement.innerText = planet; //"https://swapi.dev/api/planets/1/"
        ulElement.appendChild(liElement);
    });
}

function renderSpecies(props) {
    const ulElement = getOrCreateElementById("species_list", "ul", function (ulElement2) {
        ulElement2.id = "species_list";
        ulElement2.innerHTML = "";
        return ulElement2;
    })

    props.movieSpecies.forEach(function (specie) {
        const liElement = document.createElement('li');
        liElement.innerText = specie; //"https://swapi.dev/api/planets/1/"
        ulElement.appendChild(liElement);
    });
}


function renderApp(props) {
    if (props.isLoading === true) {
        return;
    }

    if (props.hasError) {

        renderError(props);

        renderGreeting();
        return;

    }
    if (props.planets !== undefined) {
        renderTitle({
            movieTitle: props.movieTitle,
            movieEpisodeId: props.movieEpisodeId
        });

        //render Director movie.director con h2
        renderDirector({
            movieDirector: props.movieDirector
        })


        renderProducer({    //h3
            movieProducer: props.movieProducer
        })


        renderOpeningCrawl({  //p
            movieOpeningCrawl: props.movieOpeningCrawl
        })


        renderPlanets({
            planets: props.planets
        });


        //renderizzare la lista movie.species con ul e relativi li
        renderSpecies({
            movieSpecies: props.movieSpecies
        })

        renderGreeting();
    }
}

async function logMovies() {
    const response = await fetch("https://swapi.dev/api/films");
    const films = await response.json();
    console.log(movies);
    return films;
}



async function App(props) {

    async function fetchMovieById(id) {
        try {
            const response = await fetch(`https://swapi.dev/api/films/${id}`);

            const movie = await response.json();
            console.log("Success:", movie);
            return movie;
        } catch (e) {
            console.log("Errore", e);
        }

    }

    const state = {
        planets: undefined,
        isLoading: false,
        hasError: false
    };

    renderApp(state);

    try {
        renderApp({
            planets: undefined,
            isLoading: true,
            hasError: false,
        })
        const movie = await fetchMovieById(props.id);
        renderApp({
            planets: movie.planets,
            movieTitle: movie.title,
            movieEpisodeId: movie.episode_id,
            movieDirector: movie.director,
            movieSpecies: movie.species,
            movieProducer: movie.producer,
            movieOpeningCrawl: movie.opening_crawl,
            isLoading: false,
            hasError: false
        })
    } catch (e) {
        console.log(e)
        renderApp({
            planets: undefined,
            isLoading: false,
            hasError: true
        })
    }

}


//App();

async function MyApplication(props) {
    await App({ id: props.id });
}

MyApplication({ id: 1 });