import React,{ useState } from 'react';
import ExpenseForm from './ExpenseForm'
import './NewExpense.css';
function NewExpense(props){
    const [isediting,setisediting]=useState(false);
    function saveExpensedata(EnteredData){
        const expensedata={
                ...EnteredData,
                ID: Math.random().toString()
    };
        props.onaddexpense(expensedata);
        setisediting(false);
    };
    function startEditinghandler(){
        setisediting(true);
    }
    function stopEditingthandler(){
        setisediting(false);
    }
return (
<div class="new-expense">
{!isediting && <button onClick={startEditinghandler}>Add New Expense</button>}
{isediting &&<ExpenseForm onsaveExpensedata={saveExpensedata} oncancel={stopEditingthandler}/>}
</div>
)
}
export default NewExpense;