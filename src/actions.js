//import {createAction} from "@reduxjs/toolkit";
import {createAction} from "redux-act";
import {apiReducer} from "./reducer";

// export const increase = createAction("INCREASE");
// export const decrease = createAction("DECREASE");


export const username = createAction("Username", (username) => ({username}));

export const getQuotes = () => (dispatch) => {
    console.log("getQuotes", dispatch);
    fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
        .then(response => response.json())
        .then(data => {
            console.log("data:", data);
            dispatch(apiReducer(data));
        });
};
