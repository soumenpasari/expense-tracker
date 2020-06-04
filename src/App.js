import React, { Fragment, useEffect } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

// importing components
import {Navbar} from './components/Navbar';
import {Balance} from './components/Balance';
import {IncomeExpense} from './components/IncomeExpense';
import {TransactionList} from './components/TransactionList';
import {AddTransaction} from './components/AddTransaction';

function App() {
  useEffect(() => {
    // Auto initialize all the things!
    M.AutoInit();
  });
  return (
    <Fragment>
      <Navbar />
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </Fragment>
  );
}

export default App;
