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
        if(wordIndex === (words.length - 1)){
            return;
        } 
        console.log("IncrementIndex function -> wordIndex state: ", wordIndex);
        setWordIndex(wordIndex + 1);
        console.log("IncrementIndex function -> wordIndex state: ", wordIndex);

    
    }

    function DecrementIndex(){
        if(wordIndex === 0){
            return;
        }
        console.log("IncrementIndex function -> wordIndex state: ", wordIndex);
        setWordIndex(wordIndex - 1);
        console.log("IncrementIndex function -> wordIndex state: ", wordIndex);
    }

    function AddWordAtCurrentIndex(){
        console.log("AddWordAtCurrentIndex function -> myString state: ", myString);
        const nextStringPortion = words[wordIndex];
        setMyString(myString + nextStringPortion + " ");
        console.log("AddWordAtCurrentIndex function -> myString state: ", myString);
    }

    return(
        <div>
            <h1>My String is {myString}</h1>
            <h2>word at index = {words[wordIndex]}</h2>
            <button onClick={AddWordAtCurrentIndex}>add word at index, word - {words[wordIndex]}</button>
            <button onClick={IncrementIndex}>increment index by one</button>
            <button onClick={DecrementIndex}>decrement index by one</button>
        </div>

    );
}

export default StringEsercitazione;


