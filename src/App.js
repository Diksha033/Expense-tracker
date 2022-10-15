import React,{useState} from 'react';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses'

function App() {
  const dummy_expenses = [
    { id: "e1", title: "toilet paper", amount: "94.12", date:new Date(2021,4,15) },  
    { id: "e2", title: "T.V", amount: "799.49", date: new Date(2022,5,1) },
    { id: "e3", title: "car insurance", amount: "2345", date: new Date(2020,9,21) },
    { id: "e4", title: "new desk(wooden)", amount: "200", date: new Date(2022,1,2) }
  ];
const [expenses,setexpenses]=useState(dummy_expenses);
  function addexpensehandler(expensedata){
const nexpense=[expensedata,...expenses];
setexpenses(nexpense);
  }
  return(  <div>
  <NewExpense onaddexpense={addexpensehandler}/>  
  <Expenses items={expenses}/>
  </div>  
  );
}
export default App;

















/* <img src={logo} className="App-logo" alt="logo" />
       <p>
         Edit <code>src/App.js</code> and save to reload.
       </p>
       <a
         className="App-link"
         href="https://reactjs.org"
         target="_blank"
         rel="noopener noreferrer"
       >
         Learn React 
       </a> */