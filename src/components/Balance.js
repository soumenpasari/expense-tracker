import React, { useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';

export const Balance = () => {
    const {transaction} = useContext(GlobalContext);
    // calculating balance
    const amounts = transaction.map(trans => trans.amount);
    const total = amounts.reduce((acc,item) => (acc += item),0).toFixed(2);
    return (
        <div>
            <h6 className='grey-text'>Balance</h6>
            <h5>{total}</h5>
            <div className='divider'></div>
        </div>
    )
}
