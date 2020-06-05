import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';
    const transColorCode = transaction.amount < 0 ? 'red-text' : 'green-text';
    return (
        <li className='collection-item'>
            <div>
            {transaction.text}
            <span className='secondary-content'>
                <i class="material-icons righ purple-text" onClick={() => deleteTransaction(transaction.id)}>close</i>
            </span>
            <span className={ 'secondary-content '+transColorCode }>
                {sign} R.s. {Math.abs(transaction.amount)}
            </span>
            </div>
        </li>
    )
}
