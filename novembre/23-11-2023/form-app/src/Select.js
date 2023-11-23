import React, { useState } from 'react';


function Select(props) {
    const options = [
        {value: "India", text: "India" },
        {value: "Sri Lanka", text: "Sri Lanka" },
        {value: "Australia", text: "Australia" }
    ]
    const [selectedOption, setSelectedOption] = useState("India");

    console.log("RENDER > Select > state -> ", selectedOption);

    //const options = ["mela", "arancia", "banana", "kiwi"];

    //console.log("Radio > selectedOption state > ", selectedOption);

    return (
        <>
            <select name="country" id="country" value={selectedOption} onChange={function(event){
                    console.log("select event -> ", event.target.value);
                    setSelectedOption(event.target.value);
                }}>
     {/*            <option value="India">India</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Australia">Australia</option> */}
                {options.map(function(option){
                   return(<option key={option.value} value={option.value}>{option.text}</option>);
                })}
            </select>
        </>



    );
}

export default Select;