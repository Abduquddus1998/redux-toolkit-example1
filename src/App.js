import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import logo from './logo.svg';
import './App.css';
import Counter from "./Counter";
import Forms from "./Forms";
import {setAddition} from './reducer';
import {returnString} from "./selectors";

function App() {
    const [select, setSelect] = useState("");
    const dispatch = useDispatch();

    const changeSelect = (e) => {
        setSelect(e.currentTarget.value);
    }

    const showInput = () => {
        dispatch(setAddition(select));
    }

    const newAdditionWithSelector = useSelector(state => returnString(state));
    console.log(newAdditionWithSelector, "selector");

    const newAddition = useSelector(state => state.checkSelector.addition);
    console.log(newAddition, "withoutSelector");
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
            onChange={(e) => changeSelect(e)}
            />
            <button onClick={() => showInput()}>Return</button>
            <br/>
            <br/>
            <span>{newAddition}</span>
            <br/>
            <span>{newAdditionWithSelector}</span>
            {/*<ul>*/}
            {/*    {newAddition.map((data, index) =>*/}
            {/*        <div key={index} style={{display: "inlineBlock"}}>*/}
            {/*            <li>{data.addition}</li>*/}
            {/*            <br/>*/}
            {/*        </div>*/}
            {/*    )}*/}
            {/*</ul>*/}
        </div>

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
