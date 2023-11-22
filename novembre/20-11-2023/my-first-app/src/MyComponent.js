import React, {useState} from 'react';


const MyComponent = () => {
    const [state, setState] = useState("first state");

    const onButtonClick = () => {
        setState("second state");


    }

    function doItLater(){
        setTimeout(function(previousState){
            return `${previousState} and later state`
        }, 3000); //timeout di 3 secondi

    }

    function doItNow(){
        setState(`${state} now`);
    }

    return(
        <div>
            <h1>{state}</h1>
            <button onClick={doItLater}>Later</button>
            <button onClick={doItNow}>Now</button>
        </div>
    );

}