import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css'


const ExpenseItem = (props) => { 
  
  const clickHandler = (e) => {
    e.target.parentNode.remove()
  }

  return (
        <Card className="expense-item">
          <ExpenseDate date = {props.date}/>
          <ExpenseDetails amount = {props.amount} />
          <ExpenseDetails title = {props.title} />
          <ExpenseDetails location = {props.location} />
          <button onClick={clickHandler}>Delete Expense</button>
        </Card>
          
        
    )
}

export default ExpenseItem;