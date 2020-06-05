import React, { useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';

export const IncomeExpense = () => {
    const {transaction} = useContext(GlobalContext);

    const amounts = transaction.map(trans => trans.amount);
    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item),0)
        .toFixed(2);
    const expense = amounts
        .filter(item => item < 0)
        .reduce((acc, item) => (acc += item),0)
        .toFixed(2) * -1;

    return (
        <div className='card-panel white darken-2 black-text'>
            <div className='row center'>
                <div className='col s6'>
                    <h6>Income</h6>
                    <h5 className='green-text'>{income}</h5>
                </div>
                <div className='col s6'>
                    <h6>Expense</h6>
                    <h5 className='red-text'>{expense}</h5>
                </div>
            </div>
        </div>
    )
}
