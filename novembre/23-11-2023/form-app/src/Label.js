import React, { useState } from 'react';


function Label(props) {

    const [value, setValue] = useState("");

    console.log("RENDER -> ", value);

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <>
            <div style={{ marginBottom: 15 }}>
                <label>
                    {props.type === "username" ? "Username: &nbsp;" : "Password: &nbsp;"}
                    <input name={props.type}
                        type={props.mode}
                        id={props.type}
                        value={props.type}
                        placeholder={props.type}
                        onChange={handleChange}
                    />
                </label>
            </div>
        </>
    );
}

export default Label;