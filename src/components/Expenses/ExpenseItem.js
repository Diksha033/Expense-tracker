import React from 'react';   // this is to import the react hook "useState" which kindoff re runs a specific part of code to update data
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from'../UI/Card';
function ExpenseItem(props) {
    // const [item,setitem]=useState(props.item);    //this useState hook takes  the value() which is to be updated) as an argument and then returns two things first it returns the value which is then stored in a variable and secondly it returns a function which is then used to update the value;
// let item=props.item;
    // function clickhandler(){
    //     setitem("updated!!");
    //     console.log(item);
    // }
    return (
        <Card class ="expense-item">
        <ExpenseDate date={props.date}/>
        <div  class ="expense-item__description">
        <h2 class ="expense-item-h2">{props.title}</h2>
        <div class ="expense-item__price">${props.amount}</div>
        </div>
        </Card>
    );
}
export default ExpenseItem; 



// <button onClick={clickhandler}>Change Item</button>