import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement} from "./reducer";
//import {increase,decrease} from "./actions";


const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.rootSLice);


    const asyncAction = () => {
        setInterval(() => {
            dispatch(increment())
        }, 500)
    }

    return (
        <div>
            <span>{count}</span>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <br/>
            <span>Asynchronous increment {count}</span>
            <button
                onClick={() => asyncAction()}
            >
                Go
            </button>

            <button onClick={() =>  clearInterval(asyncAction)}>Stop</button>

        </div>
    );
};

export default Counter;