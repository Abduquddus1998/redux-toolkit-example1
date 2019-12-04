import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import logo from './logo.svg';
import './App.css';
import Counter from "./Counter";
import Forms from "./Forms";
import {setAddition} from './reducer';
import {returnString} from "./selectors";
import {username} from "./actions";
import FetchingData from "./fetchingData";

function App() {
    const [select, setSelect] = useState("");
    const [act, setAct] = useState("");
    const dispatch = useDispatch();


    const handleInputs = (setState) => (e) => setState(e.target.value);

    const sendToAct = () => {
        dispatch(username(act));
    }

    const showInput = () => {
        dispatch(setAddition(select));
    }

    const usingAct = useSelector(state => state.actReducer.username);
    const newAdditionWithSelector = useSelector(state => returnString(state));
    const newAddition = useSelector(state => state.checkSelector.addition);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        <br/>
        <br/>
        <br/>
        <br/>
        <div>
            <input
            name={"select"}
            type="text"
            onChange={handleInputs(setSelect)}
            />
            <button onClick={() => showInput()}>Return</button>
            <br/>
            <br/>
            <span>{newAddition}</span>
            <br/>
            <span>{newAdditionWithSelector}</span>
        </div>

        <br/>
        <h1>Using Redux act</h1>
        <div>
            <input
                name={"act"}
                type="text"
                onChange={handleInputs(setAct)}
            />
            <button onClick={() => sendToAct()}>Return</button>
            <br/>
            <br/>
            <span>{usingAct.username}</span>
            <br/>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1>Using Redux-thunk</h1>
        <FetchingData/>

      <br/>
      <br/>
      <br/>
      <br/>
      <Counter/>
        <br/>
        <br/>
        <br/>
        <br/>

        <Forms/>

        <br/>
        <br/>
        <br/>
        <br/>

    </div>
  );
}

export default App;
