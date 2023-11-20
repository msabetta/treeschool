import React from 'react';


/*
    Creare un componente che accetti un contenuto props.children 
    e che se è presente il children mostri anche un elemento p con del testo che arrivi da un'altra prop 
    ( additionalText )
*/


function Solution(props) {
    return (
        <div>
            {props.children}
            {props.children ? <p>{props.additionalText}</p> : null} 
            </div>
    );
}

export default Solution;