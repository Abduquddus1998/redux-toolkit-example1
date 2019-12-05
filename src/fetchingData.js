import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getQuotes} from "./actions";

const FetchingData = () => {
    const dispatch = useDispatch();

    const fetchApi = useCallback(() => {
        dispatch(getQuotes());
    }, [dispatch]);

    const quote = useSelector(state => state.apiReducer);
    const error = useSelector(state => state.fetchFailed);
    const loading = useSelector(state => state.fetchRequested);

    console.log(quote);

    return (
        <div>
            <button onClick={fetchApi}>Get Data</button>
            {loading &&  (
                <div>LOADING...</div>
            )}
        </div>
    );
};

export default FetchingData;

