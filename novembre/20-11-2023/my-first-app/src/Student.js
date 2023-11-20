import React from 'react';

function Student() {
    const name = "Mario Sabetta";

    function logName() {
        console.log(`Il mio nome è ${name}`);
    }

    return (
        <div>
            <h1 className="my-class" onClick={logName()}>Mario Sabetta</h1>
            <h1>My Hobbies</h1>
            <img
                src="https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4"
                alt="My Hobbies"
                className="photo"
                width="200px"
                height="200px"
                onClick={function () {
                    //console.log(name);
                    alert("Hai cliccato la foto!");
                }}
            />
            <ul>
                <li>Coding</li>
                <li>Testing</li>
                <li>Making Researches</li>
            </ul>
        </div>
    );

}

export default Student;