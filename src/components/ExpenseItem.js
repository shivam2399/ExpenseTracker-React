import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css'


function ExpenseItem(props) { 
  return (
        <Card className="expense-item">
          <ExpenseDate date = {props.date}/>
          <ExpenseDetails amount = {props.amount} />
          <ExpenseDetails title = {props.title} />
          <ExpenseDetails location = {props.location} />
        </Card>
          
        
    )
}

export default ExpenseItem;