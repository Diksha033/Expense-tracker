/* eslint-disable no-undef */
import ExpenseItem from './ExpenseItem'; 
import './Expenselist.css';

function Expenselist(props){

       if(props.items.length ===0){
        return <h2 class="expenses-list__fallback"> No expenses found</h2>
       }

return <ul class="expenses-list">
          {props.items.map((expenses) =>( 
            <ExpenseItem
            key={expenses.id}
            title={expenses.title}
            amount={expenses.amount} 
            date={expenses.date}
            />
          ))}
          </ul>
};

export default Expenselist; 