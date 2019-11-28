import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addItem} from "./reducer";

const Forms = () => {

    const dispatch = useDispatch();

    //todo ask about useState in several input fields
    //todo  could not combined reducers
    //todo did not use async actions
    const [name, setName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [age, setAge] = useState("");


    const saveToStore = () => {

        console.log(name, secondName, age);

        dispatch(addItem(name, secondName, age));

    }

    // let firstName = useSelector(state => state.name);
    // let lastName = useSelector(state => state.secondName);
    // let perAge = useSelector(state => state.age);

    const personalData = [] = useSelector(state => state);

    return (
        <div>
            <input
                type="text"
                name="name"
                placeholder={'Name...'}
                onChange={(e) => setName(e.target.value)}
            />
            <br/>
            <input
                type="text"
                name="secondName"
                placeholder={'Second name...'}
                onChange={(e) => setSecondName(e.target.value)}
            />
            <br/>
            <input
                type="text"
                name="age"
                placeholder={'Age...'}
                onChange={(e) => setAge(e.target.value) }
            />
            <br/>
            <button onClick={() => saveToStore()}>Add</button>

            <br/>
            <br/>
            <br/>
            <ul>
                {personalData.map((data, index) =>
                <div key={index} style={{display: "inlineBlock"}}>
                    <li>{data.name}</li>
                    <li>{data.secondName}</li>
                    <li>{data.age}</li>
                    <br/>
                </div>
                )}
            </ul>
        </div>
    );
};

export default Forms;