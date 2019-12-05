//import {createAction} from "@reduxjs/toolkit";
import {createAction} from "redux-act";
import {fetchRequested, fetchFailed, apiReducer} from "./reducer";
import axios from "axios";
// export const increase = createAction("INCREASE");
// export const decrease = createAction("DECREASE");


export const username = createAction("Username", (username) => ({username}));

export const getQuotes = () => (dispatch) => {
    console.log("getQuotes", dispatch);
    dispatch(fetchRequested(false))

    axios.get("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
        .then(res => {
            console.log("data:", res.data);
            dispatch(apiReducer(res.data));
        })
        .catch(error => dispatch(fetchFailed(error)));

    axios.post(`https://jsonplaceholder.typicode.com/todos`, {
        title: "New America",
        userId: 12,
        completed: false
    }).then(res => console.log("result", res.data))
        .catch(error => console.log("error", error));
};
