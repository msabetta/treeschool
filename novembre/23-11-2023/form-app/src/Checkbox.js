import React, { useState } from 'react';



function Checkbox(props) {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <label>
            Sei sicuro di avermi capito?
            <input
                type="checkbox"
                name="understood"
                checked={isChecked}
                onChange={function (event) {
                    console.log(
                        "checkbox value onChange ->",
                        event.target.checked
                    );
                    setIsChecked(event.target.checked);
                }}
            />
        </label>


    );
}

export default Checkbox;