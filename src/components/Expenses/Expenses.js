import React, { useState } from 'react';

// import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesChart  from './ExpensesChart';
import Expenselist from './Expenselist';

const Expenses = (props) => {

  const [filteredyear,setfilteredyear]=useState('2020');

function filterchangehandler(selectedyear){
setfilteredyear(selectedyear);
};

const filteredexpenses= props.items.filter(expenses=>{
  return expenses.date.getFullYear().toString()===filteredyear
  });

  return (
    <div>
      <Card class='expenses'>
        <ExpensesFilter selected={filteredyear} onChangeFilter={filterchangehandler}/>
        <ExpensesChart expenses={filteredexpenses}/>
        <Expenselist items={filteredexpenses}/>
      </Card>
    </div>
  );
};
export default Expenses; 