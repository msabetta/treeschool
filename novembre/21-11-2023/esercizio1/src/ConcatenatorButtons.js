import React, {useState} from 'react';

/*
Partendo da una stringa iniziale che viene settata dalle props.
passiamo una prop di nome "initialString" e mettiamola come argomento di useState (passiamola come stato iniziale).
Scriviamo 3 bottoni:
- Il primo bottone aggiunge una seconda parte alla stringa ("bottone 1")
- Il secondo bottone aggiunge un numero alla stringa (valore della prop initialString)
- Il terzo bottone ripristina la stringa iniziale
*/


function ConcatenatorButtons(props){

    console.log("RENDER");
    const [myString, setMyString] = useState(props.initialString);
    const [myNumber, setMyNumber] = useState(0);

   
    console.log("ConcatenatorButtons function -> myString state: ", myString);

    function AddSecondPartOfString(){
        console.log("AddSecondPartOfString function -> myString state: ", myString);
        setMyString(previousState => {
            console.log("callback previous state: ", previousState, " - ", myString);
            return previousState + " bottone 1";
        });
    }

    function AddNumberToString(){
        console.log("AddNumberToString function -> myString state: ", myString);
        setMyString(previousState => {
            console.log("callback previous state: ", previousState, " - ", myString);
            //return previousState + " " + 10;
            setMyNumber(document.getElementById('num').value)
            return previousState + " " + myNumber;
        });
    }

    function RestoreInitialString(){
        console.log("RestoreInitialString function -> myString state: ", myString);
        setMyString(props.initialString);
        console.log("RestoreInitialString function -> myString state: ", myString);
    }

    return (
        <div>
            <h1>My string is: {myString}</h1>
            <button onClick={AddSecondPartOfString}>AddSecondPartOfString</button>
            <button onClick={AddNumberToString}>AddNumberToString</button>
            <button onClick={RestoreInitialString}>RestoreInitialString</button>
            <input id="num"></input>
        </div>
    );

}

export default ConcatenatorButtons;