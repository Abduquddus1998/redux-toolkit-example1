import {configureStore} from "@reduxjs/toolkit";
//import {formSlice} from "./reducer";
import {rootReducer} from './reducer'
//import {rootSlice} from "./reducer";

export const mainStore =  configureStore({
    reducer: rootReducer
})
