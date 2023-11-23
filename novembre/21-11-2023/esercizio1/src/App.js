//import logo from './logo.svg';
import StringEsercitazione from './StringEsercitazione'
import './App.css';
//import Calcolatrice from './Calcolatrice';
//import ConcatenatorButtons from './ConcatenatorButtons';

function App() {
  return (
    <div className="App">
      {/*       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

       
      </header> */}
      {/* <Calcolatrice></Calcolatrice> */}
{/*       <ConcatenatorButtons
        initialString="Io sono Hulk"
      />
      <ConcatenatorButtons
        initialString="Io sono Thanos"
      /> */}

      <StringEsercitazione
        initialString="io dico che "
      />


    </div>
  );
}

export default App;
