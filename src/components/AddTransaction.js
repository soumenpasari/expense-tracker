import React from 'react'

export const AddTransaction = () => {
    return (
        <div>
            <h6>Add new transacton</h6>
            <div className='divider'></div>
            <form>
                <div className='input-field'>
                    <input id='descTitle' className='validate' type='text' />
                    <label htmlFor='descTitle'>Enter transaction title</label>
                </div>
                <div className='input-field'>
                    <input id='trancAmount' className='validate' type='number' />
                    <label htmlFor='trancAmount'>Enter amount</label>
                </div>
                <button className='btn purple darken-3 is-full-width waves-effect waves-light'>Add Transaction</button>
            </form>
        </div>
    )
}
