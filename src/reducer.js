import {combineReducers, createSlice} from "@reduxjs/toolkit";
// import {increase, decrease} from "./actions";
import {createReducer} from "redux-act";
import {username} from './actions';

// export const rootReducer = createReducer(0, {
//     [increase]: state => state + 1,
//     [decrease]: state => state - 1
// })

const initialState = {
    username: ""
}

export const actReducer = createReducer(on => {
    on(username, (state, username) => ({
        ...state,
        username
    }))
}, initialState);


export const rootSlice = createSlice({
    name: "counter",
    initialState: 4,
    reducers: {
        increment: state => state + 2,
        decrement: state => state - 2
    }
});


export const checkSelector = createSlice({
    name: "select",
    initialState: "",
    reducers: {
        setAddition: {
            reducer(state, action) {
                const addition = action.payload;
                // state.push({addition: addition});
                return {...state, addition}
            },
            prepare(addition) {
                return {payload: addition}
            }
        }
    }
});

export const formSlice = createSlice({
    name: "form",
    initialState: [{
        name: "",
        secondName: "",
        age: ""
    }],
    reducers: {
        addItem: {
            reducer(state, action) {
                const {name, secondName, age} = action.payload;

                // return [...state, {name: name, secondName: secondName, age: age} ]
                state.push({name: name, secondName: secondName, age: age});
            },
            prepare(name, secondName, age) {
                return {payload: {name, secondName, age}}
            }
        }
    }
});

export const apiSLice = createSlice({
    name: "api",
    initialState: {
        quotes: [],
        error: "",
        loading: false
    },
    reducers: {
        apiReducer: {
            reducer(state, action) {
                const quotes = action.payload;
                return {...state, quotes}
            },
            prepare(quotes) {
                return {payload: quotes}
            }
            // },
            // fetchFailed: {
            //     reducer(state, action){
            //         if(action.payload){
            //             return {...state, error: action.payload}
            //         } else {
            //             return state;
            //         }
            //     },
            //     prepare(error){
            //         console.log("error", error);
            //         return {payload: error}
            //     }
            // },
            // fetchRequested: {
            //     reducer(state, action){
            //
            //         return {...state, loading: action.payload}
            //     },
            //     prepare(loading){
            //         console.log("loading:",loading);
            //         return {payload: loading}
            //     }
            // }
        }
    }
})

export const {addItem} = formSlice.actions;
export const {increment, decrement} = rootSlice.actions;
export const {setAddition} = checkSelector.actions;
export const {apiReducer} = apiSLice.actions;

export const rootReducer = combineReducers({
    rootSLice: rootSlice.reducer,
    formSlice: formSlice.reducer,
    checkSelector: checkSelector.reducer,
    apiReducer: apiSLice.reducer,
    // fetchFailed: apiSLice.fetchFailed,
    // fetchRequested: apiSLice.fetchRequested,
    actReducer
});


/*
*
*
* */
