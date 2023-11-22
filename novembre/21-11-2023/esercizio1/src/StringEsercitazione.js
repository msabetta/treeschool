import React, {useState} from 'react';

/*
 Trovare un modo per comporre una frase in myString
 a partire dalla base di esercizio.
 L'obiettivo è in che  myString finisca per essere

 "Io dico che react è bello"
*/ 
//bottoni: add word at index, increment index by one, decrement index by one

function StringEsercitazione(props){
    const words = ["è","bello", "forse", "react","brutto"];

    const [myString, setMyString] = useState(props.initialString);

    const [wordIndex, setWordIndex] = useState(0);

    function IncrementIndex(){

        console.log("IncrementIndex function -> wordIndex state: ", wordIndex);
        setWordIndex(wordIndex + 1);
        console.log("IncrementIndex function -> wordIndex state: ", wordIndex);

    
    }

    function DecrementIndex(){
        console.log("IncrementIndex function -> wordIndex state: ", wordIndex);
        setWordIndex(wordIndex - 1);
        console.log("IncrementIndex function -> wordIndex state: ", wordIndex);
    }

    function AddWordAtIndex(){
        console.log("AddWordAtIndex function -> myString state: ", myString);
        
        
        
        
        setMyString(function(wordPred){
            console.log(wordPred);
            console.log();

        });
        console.log("AddWordAtIndex function -> myString state: ", myString);
    }

    return(
        <div>
            <h1>My String is {myString}</h1>
            <h2>word at index = {words[wordIndex]}</h2>
            <button onclick={AddWordAtIndex}>add word at index, word - {words[wordIndex]}</button>
            <button onclick={IncrementIndex}>increment index by one</button>
            <button onclick={DecrementIndex}>decrement index by one</button>
        </div>

    );
}

export default StringEsercitazione;


