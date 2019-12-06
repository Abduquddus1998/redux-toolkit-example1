import React, {useState, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addItem} from "./reducer";

const Forms = () => {

    const dispatch = useDispatch();

    //todo did not use async actions
    const [name, setName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [age, setAge] = useState("");


    const saveToStore = () => {
        dispatch(addItem(name, secondName, age));
    };
    //
    // const onInput = function (setState) {
    //     return function (e) {
    //         setState(e.target.value);
    //     }
    // };
    const onInput = (setState) => (e) => setState(e.target.value);

    // let firstName = useSelector(state => state.name);
    // let lastName = useSelector(state => state.secondName);
    // let perAge = useSelector(state => state.age);

    const personalData = useSelector(state => state.formSlice);

    return (
        <div>
            <input
                type="text"
                name="name"
                placeholder={'Name...'}
                onChange={onInput(setName)}
            />
            <br/>
            <input
                type="text"
                name="secondName"
                placeholder={'Second name...'}
                onChange={onInput(setSecondName)}
            />
            <br/>
            <input
                type="text"
                name="age"
                placeholder={'Age...'}
                onChange={onInput(setAge)}
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
