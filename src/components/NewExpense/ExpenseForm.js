import React, { useState } from 'react';
import './ExpenseForm.css'
function ExpenseForm(props) {
    const [newtitle, setnewtitle] = useState('');
    const [newamount, setnewamount] = useState('');
    const [newdate, setnewdate] = useState('');
    function changetitle(event) {
        setnewtitle(event.target.value);
    }
    function changeamount(event) {
        setnewamount(event.target.value);
    }
    function changedate(event) {
        setnewdate(event.target.value);
    }

    function submithandler(event){    
        event.preventDefault();
 
        const expensedata = {
            title:newtitle,
            amount:newamount,
            date:new Date(newdate),
        };

        props.onsaveExpensedata(expensedata);
        setnewtitle('');
        setnewamount('');  
        setnewdate('');
        }
        // we have passed the variables into the input boxes throught the value attribute ,, so when we change the value of that variable through our function which was made from usestate ,, then the value in the input boxo also changes because  it not only changes the value of the variable but also updates its state so thats why empty space is logged into the input box after we press the form submission button
    return (  
        <form onSubmit={submithandler}> 
            <div class="new-expense__controls">
                <div class="new-expense__control">
                    <label> Title </label>
                    <input type="text" value={newtitle} placeholder="enter title"onChange={changetitle} />        
                        </div>
                <div class="new-expense__control">
                    <label> Amount </label>
                    <input type="number" min="0.01" step="0.01" value={newamount} placeholder="enter amount"onChange={changeamount} />
                </div>
                <div class="new-expense__control">
                    <label> Date </label>
                    <input type="date" min="2019-01-01" max="2023-12-31" value={newdate} placeholder="enter date"onChange={changedate} />
                </div> 
            </div>
            <div class="new-expense__actions">
            <button onClick={props.oncancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
    }
export default ExpenseForm;
