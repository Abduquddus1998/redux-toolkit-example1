import {combineReducers, createSlice} from "@reduxjs/toolkit";
 // import {increase, decrease} from "./actions";




// export const rootReducer = createReducer(0, {
//     [increase]: state => state + 1,
//     [decrease]: state => state - 1
// })
export const rootSlice = createSlice({
    name: "counter",
    initialState: 4,
    reducers: {
        increment : state => state + 2,
        decrement : state => state - 2
    }
});



export const checkSelector = createSlice({
    name: "select",
    initialState: "",
    reducers: {
        setAddition: {
            reducer(state, action){
                const addition = action.payload;
                // state.push({addition: addition});
                return {...state, addition}
            },
            prepare(addition){
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
            reducer(state, action){
                const {name, secondName, age} = action.payload;

                // return [...state, {name: name, secondName: secondName, age: age} ]
                state.push({name: name, secondName: secondName, age: age});
            },
            prepare(name, secondName, age){
                return {payload: {name, secondName, age}}
            }
        }
    }
});

//
export const {addItem} = formSlice.actions;
export const {increment, decrement} = rootSlice.actions;
export const {setAddition} =  checkSelector.actions;

export const rootReducer = combineReducers({
    rootSLice: rootSlice.reducer,
    formSlice: formSlice.reducer,
    checkSelector: checkSelector.reducer
})