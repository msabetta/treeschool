//import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import StringList from './StringList';
import MyButton from './MyButton';
import Paragraph from './Paragraph';

//********************************/
// LOGICA FETCH

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

//********************************/


function App() {

  const [state, setState] = useState({
    data: undefined,
    isLoading: false,
    hasError: false
  });

  function getGreeting(){
    if(state.hasError || state.data !== undefined){
      return <h3>è bello conoscere altri appassionati</h3>
    }
    return null;
  }

  function getLoadedDataContent(){
    return(
      <>
      <h1>{`Titolo: ${state.data.title}, id episodio: ${state.data.episode_id}`}</h1>
      {/*inserire il director*/}
      <h2>{`Director: ${state.data.director}`}</h2>
{/*       <ul>
        {state.data.planets.map(function(planet){
          return <li key={planet}>{planet}</li>
          //return <li key={planet}>{planet} onClick={function(planet){}}</li>
        })}
      </ul> */}
      <StringList dataList={state.data.planets} />

      {/*inserire ul con i characters*/}
{/*       <ul>
        {state.data.characters.map(function(character){
          return <li key={character}>{character}</li>
          //return <li key={planet}>{planet} onClick={function(planet){}}</li>
        })}
      </ul> */}
      <StringList dataList={state.data.characters} />
      <StringList dataList={state.data.starships} />
      </>
    );
  }

  console.log("render ---> STATE", state);



  async function fetchMovie() {
    try {

        setState(function(previousState){
          return{
            data: previousState.data,
            isLoading: true,
            hasError: false
          }
        })

        const movie = await fetchMovieById(1);

        setState({
            data: movie,
            isLoading: false,
            hasError: false
        })

    } catch (e) {
        console.log("Errore", e);
        setState({
            data: undefined,
            isLoading: false,
            hasError: true
        })
        
    }

}

  return (
    <div className="App">
      {/* <button onClick={fetchMovie}>Premi per partire in un viaggio stellare</button> */}
      <MyButton onClick={fetchMovie}>Premi per partire in un viaggio stellare</MyButton>
      <MyButton 
        onClick={fetchMovie} 
        children={" Premi per partire in un viaggio stellare"}
      />

      
      
      {/* {state.isLoading ? <p>sto caricando il dato</p> : null} */}
      {state.isLoading ? <Paragraph children={"sto caricando il dato"} /> : null}
      {state.data !== undefined ? getLoadedDataContent() : null}
{/*       {state.hasError ? <p>qualcosa è andato storto</p> : null} */}
      {state.hasError ? <Paragraph children={"qualcosa è andato storto"}/> : null} 
      {getGreeting()}
    </div>
  );
}

export default App;
/*
* extra:
* - creare StringList che renderizzi ul con i vari li prendendo
*   l'array di dato dalle props
* - estraiamo il bottone come componente che riceve una prop click
*   <MyButton onClick={fetchMovie}>Premi per...</MyButton>
* - Estrarre un componente Paragraph che renderizzi un p con un testo
*   da ricevere nelle props   
*/