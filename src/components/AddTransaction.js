import React, {useState, useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const AddTransaction = () => {
    const {addTransaction} = useContext(GlobalContext);
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);

    const onSubmit = e => {
        e.preventDefault();

        const newTransactoin = {
            id : Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransactoin);
        // clearing the compenent states
        setText('');
        setAmount(0);
    }

    return (
        <div>
            <h6>Add new transacton</h6>
            <div className='divider'></div>
            <form onSubmit={onSubmit}>
                <div className='input-field'>
                    <input id='descTitle' className='validate' type='text' value={text}
                    onChange={(e) => setText(e.target.value)} />
                    <label htmlFor='descTitle'>Enter transaction title</label>
                </div>
                <div className='input-field'>
                    <input id='trancAmount' className='validate' type='number' value={amount}
                    onChange={(e) => setAmount(e.target.value)} />
                    <label htmlFor='trancAmount'>Enter amount</label>
                </div>
                <button className='btn purple darken-3 is-full-width waves-effect waves-light'>Add Transaction</button>
            </form>
        </div>
    )
}
