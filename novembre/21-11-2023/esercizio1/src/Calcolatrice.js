import React, { useState } from 'react';

/*
    Creare un componente che in un h1 mostri sempre un numero (che sarà il nostro stato ), lo stato iniziale sarà 1.

    Creo dei bottoni che:
    - aggiungano 2
    - dividano per 2
    - moltiplichino per 2
    - sottraggano 2

    extra:
    p -> una label che ci dica se in nostro numero ( stato ) è pari o dispari
*/

function Calcolatrice(props) {
    console.log("RENDER");
    const [myNumber, setMyNumber] = useState(1);

    console.log("Calcolatrice function -> myNumber state: ", myNumber);

    function addTwo() {
        console.log("addTwo function -> myNumber state: ", myNumber);
        //setMyString(myString + " and doing it now ");
        setMyNumber(myNumber + 2);
    }

    function divideTwo() {
        console.log("divideTwo function -> myNumber state: ", myNumber);
        //setMyString(myString + " and doing it now ");
        setMyNumber(myNumber / 2);
    }

    function multiplyTwo() {
        console.log("multiplyTwo function -> myNumber state: ", myNumber);
        //setMyString(myString + " and doing it now ");
        setMyNumber(myNumber * 2);
    }

    function subtractTwo() {
        console.log("subtractTwo function -> myNumber state: ", myNumber);
        //setMyString(myString + " and doing it now ");
        setMyNumber(myNumber - 2);
    }

    function isEven() {
        console.log("isEven function -> myNumber state: ", myNumber);
        //setMyString(myString + " and doing it now ");
        //setMyNumber(prevState => prevState - 2);
        return myNumber % 2 === 0;
    }


    return (
        <div>
            <h1>Number: {myNumber}</h1>
            <div>
                {isEven() ? <p>sono pari</p> : <p>sono dispari</p>}
            </div>
            <button onClick={addTwo}>+2</button>
            <button onClick={divideTwo}>/2</button>
            <button onClick={multiplyTwo}>*2</button>
            <button onClick={subtractTwo}>-2</button>
        </div>
    );
}

export default Calcolatrice;