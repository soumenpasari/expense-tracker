import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// initial state
const initialState = {
    transaction : []
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
    function addTransaction(trans) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: trans
        });
    }

    return (<GlobalContext.Provider value={{
        transaction: state.transaction,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}