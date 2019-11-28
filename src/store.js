import {configureStore} from "@reduxjs/toolkit";
import {formSlice} from "./reducer";

export const mainStore =  configureStore({
    reducer: formSlice.reducer
})
