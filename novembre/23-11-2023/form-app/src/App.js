/* import logo from './logo.svg'; */
import './App.css';
import React, { useState } from 'react';
import Checkbox from './Checkbox';
import Radio from './Radio';
import Select from './Select';
//import Label from './Label';

function App() {
  const [usernameInputValue, setUsernameInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");

  console.log("RENDER USERNAME -> ", usernameInputValue);
  console.log("RENDER PASSWORD -> ", passwordInputValue); 


  return (
    <div className="App">
      <h1>Login</h1>
      <form>
         <div style={{ marginBottom: 15 }}>
          <label>
            Username: &nbsp;
            <input name="username"
              type="text"
              id="username"
              value={usernameInputValue}
              placeholder="username"
              onChange={function (event) {
                console.log("evento! - ", event.target.value);
                setUsernameInputValue(event.target.value);
              }}
            />
          </label>
        </div> 
{/*         <Label type="username" mode="text" /> */}
         <div style={{ marginBottom: 15 }}>
          <label>
            Password: &nbsp;
            <input name="password"
              type="password"
              id="password"
              value={passwordInputValue}
              placeholder="password"
              onChange={function (event) {
                console.log("event - ", event.target.value);
                setPasswordInputValue(event.target.value);
              }}
            />
          </label>
        </div> 
{/*         <Label type="password" mode="password" /> */}
      </form>
      <button onClick={function () {
        setUsernameInputValue("");
        setPasswordInputValue("");
      }}>Reset all fields</button>
      &nbsp;
      <button onClick={function () {
          console.log("Success!")
      }}>CLICK</button>
      <br></br>
      <Checkbox />
      <br></br>
      <Radio />
      <br></br>
      <Select />

    </div>
  );
}

export default App;
