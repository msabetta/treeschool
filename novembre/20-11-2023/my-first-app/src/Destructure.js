import React from 'react';

function Destructure(){
    const myStateStuff = ["state", "setState"];
    const [
        firstElement,
        secondElement
    ] = myStateStuff;

    return [firstElement, secondElement];
}

