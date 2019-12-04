import {configureStore} from "@reduxjs/toolkit";
//import {formSlice} from "./reducer";
import {rootReducer} from './reducer'
import {applyMiddleware} from "redux";
import thunk from "redux-thunk";
//import {rootSlice} from "./reducer";

export const mainStore = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
});
