import React, { useState } from 'react';



function Radio(props) {
    const [selectedOption, setSelectedOption] = useState("arancia");

    const options = ["mela", "arancia", "banana", "kiwi"];

    console.log("Radio > selectedOption state > ", selectedOption);

    return (
        <>
            {options.map(function (fruit) {
                console.log(
                    fruit + " è uguale a state " + selectedOption,
                    selectedOption === fruit
                );
                return (

                    <label key={fruit}>
                        <input
                            type="radio"
                            name="fruit"
                            value={fruit}
                            checked={selectedOption === fruit}
                            onChange={function (event) {
                                console.log("event radio -> ", event.target.value);
                                setSelectedOption(event.target.value);
                            }}
                        />
                        {fruit}
                    </label>
                );


            })}
        </>



    );
}

export default Radio;