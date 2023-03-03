import React, { useState } from 'react';
import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css'


const ExpenseItem = (props) => { 

  const clickHandler = (e) => {
    e.target.parentNode.remove()
  }
  
  const [amount, setAmount] = useState(props.amount)

  const priceHandler = () => {
    setAmount('100');
  }

  return (
        <Card className="expense-item">
          
          <ExpenseDate date = {props.date}/>
          <ExpenseDetails amount = {amount} />
          <ExpenseDetails title = {props.title} />
          <ExpenseDetails location = {props.location} />
          <button onClick={clickHandler}>Delete Expense</button>
          <button onClick={priceHandler}>Price change</button>
        </Card>
          
        
    )
}

export default ExpenseItem;