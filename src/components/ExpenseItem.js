import './ExpenseItem.css'

function ExpenseItem(props) { 
  // const locationOfExpense = 'London' 
    
    
  return (
        <div className="expense-item">
          <div>{props.date.toISOString()}</div>
          <div className="expense-item__description">
           <h2>{props.title}</h2>
           <div className="expense-item__price">{props.amount}</div>
           {/* <div>{locationOfExpense}</div> */}
          </div>
        </div>
          
        
    )
}

export default ExpenseItem;