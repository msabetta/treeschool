//import logo from './logo.svg';
import './App.css';
import sum, { multiply, myFavouriteOperation } from './utils'
import Student from './Student';
import Section from './Section';
import Solution from './Solution';
import Counter from '../../../21-11-2023/state-app/src/Counter';

console.log(sum(2, 2));
console.log(multiply(3, 2));
console.log(myFavouriteOperation);


//source: https://react.dev/learn/writing-markup-with-jsx

/* function HelloWorld() {
  return <h1>Hello World</h1>
} */

/*
REGOLE JSX
  1) chiudere tutti i tag
  2) per avere multipli elementi sul livello principale del JSX ci avvaliamo del fragment <></>, 
    non usare le parentesi quadre
  3) class si sostituisce con className
  4) React offre suggerimenti in console in caso di errori e warning
*/

function MultipleFirstLevelElements() {
  return (
    <>
      <div>Fragment</div>
      <div>around</div>
    </>
  );
}

function HelloWorld() {

  function logHappiness() {
    console.log("ma si fa davvero solo così")
  }

  return (
    <>
      <div>
        <h1 className={"my-class"} onClick={logHappiness()}>Hello World</h1>
        <h1>Hedy Lamarr's Todos</h1>
        <img
          src="https://i.imgur.com/yXOvdOSs.jpg"
          alt="Hedy Lamarr"
          className="photo"
          width="200px"
          height="200px"
        />
        <ul>
          <li>Invent new traffic lights</li>
          <li>Rehearse a movie scene</li>
          <li>Improve the spectrum technology</li>
        </ul>
      </div>

    </>
  );
}


/* function App() {

  const isFirstTimeISeeReact = true;
  if (isFirstTimeISeeReact) {
    return (
      <>
        {/* <HelloWorld />
        <MultipleFirstLevelElements /> *///}
{/*      <MakeHobbies /> */ }
{/*         <Student /> */ }
// </>
//);
//}
//return <h1>Boring, I already know everything</h1>
/*   return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld />
{/*         <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> *///}
// </header>
// </div>
// ); */
//} * /

function App() {
  return (
    <>
      <Solution additionalText={"ci sono solo se c'è children"} >
        <p>ehi sono il children</p>
      </Solution>

      <Solution additionalText={"ci sono solo se c'è children"} >
      </Solution>

      <Section
        title="React components"
      >
        <p>I componenti React sono divertentissimi</p>
      </Section>
      <Section
        className="special-section"
        title="React Props"
        onClick={() => { console.log("react props") }}
      >
        <p>Le props sono potentissime</p>

      </Section>

      <Section
        title="React state"
        onClick={() => { console.log("react state") }}
      />

      {/* <Section
        title="React state"
        onClick={() => { console.log("react state") }}
        children={() => { <p>altro testo</p> }}
      /> */}
      <Counter></Counter>



    </>
  );
}

export default App;
