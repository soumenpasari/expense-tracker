import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

// importing components
import {Transaction} from './Transaction';

export const TransactionList = () => {
    const {transaction} = useContext(GlobalContext);

    return (
        <div>
            <h6>Transaction list</h6>
            <div className='divider'></div>
            <ul className='collection'>
                {transaction.map(trans => (
                    <Transaction transaction={trans} key={trans.id} />
                ))}
            </ul>
        </div>
    )
}
