import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// initial state
const initialState = {
    transaction : [
        {id:1, text : 'flower', amount : -20},
        {id:2, text : 'rice', amount : -50},
        {id:3, text : 'UPI', amount : 110}
    ]
}

// creating context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    return (<GlobalContext.Provider value={{
        transaction: state.transaction,
        deleteTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}