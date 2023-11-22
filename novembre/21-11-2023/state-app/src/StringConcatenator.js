import React, { useState } from 'react';

function StringConcatenator(props){
    console.log("RENDER");
    const [myString, setMyString] = useState("initial string state");

    console.log("doItNow function -> myString state: ", myString);

    function doItNow(){
        console.log("doItNow function -> myString state: ", myString);
        //setMyString(myString + " and doing it now ");
        setMyString(prevState => prevState + " and doing it now ")
    }

    function doItLater(){
        console.log("doItLater function -> myString state: ", myString);
        setTimeout(function(){
            console.log("executing timeout doItLate -> myString: ", myString);
            // DEMO ERRORE (non avviene la concatenazione con la somma di stringhe)
            //setMyString(myString + " and doing it later ");
            //uso della callback in setMyString
            setMyString(function(previousState){
                console.log("callback previous state: ", previousState, " - ", myString)
                return previousState + " and doing it later ";
            })
        },10000);
    }

    return(
        <div>
            <h1>My string è: {myString}</h1>
            <button onClick={doItNow}>Do it now</button>
            <button onClick={doItLater}>Do it later</button>
        </div>

    );

}

export default StringConcatenator;