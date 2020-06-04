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
        <div className='row'>
          <div className='col s12 m12 l4 xl4'>
              <Balance />
              <IncomeExpense />
          </div>
          <div className='col s12 m12 l4 xl4'>
              <TransactionList />
          </div>
          <div className='col s12 m12 l4 xl4'>
              <AddTransaction />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
