import {createSelector} from "reselect";



export const returnString = createSelector(
    (state) => state.checkSelector.addition,
    (additional) => {
        return additional ;
    }
);