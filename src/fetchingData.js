import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchRequested, fetchFailed, apiReducer} from "./reducer";
import {getQuotes} from "./actions";
// import axios from "axios";

const FetchingData = () => {
    const dispatch = useDispatch();

    const fetchApi = useCallback(() => {
        // dispatch(fetchRequested(true));
        console.log("fetchApi");
        dispatch(getQuotes());
        // .catch(error => dispatch(fetchFailed(error)));
    }, [dispatch]);


    const quote = useSelector(state => state.apiReducer);
    // const error = useSelector(state => state.fetchFailed);
    // const loading = useSelector(state => state.fetchRequested);
    console.log(quote);

    return (
        <div>
            <button onClick={fetchApi}>Get Data</button>
        </div>
    );
};

export default FetchingData;

