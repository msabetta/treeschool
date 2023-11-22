import React, {useState} from 'react';


function Counter(){
    console.log("RENDER");
    
    const [
        count, 
        setCount
    ] = useState(
        0 // valore iniziale dello state, se non lo passo è undefined
    );

    console.log("STATE");

    function increment(){
        // count = count + 1  //NOO VIETATO!!!
        const nextState = count + 1;
        setCount(nextState);
        console.log("count dopo la modifica nella funzione increment", count);
        console.log("lo stato del mio prossimo render", nextState);
    }

    return (
        <div>
            <h1>Il conteggio è: {count}</h1>
            <button onClick={increment}>Increment</button>
        </div>

    );
}

export default Counter;