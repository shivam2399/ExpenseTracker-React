import './ExpenseItem.css'

function ExpenseItem() {
  const expenseDate = new Date(2023, 1, 22);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 290.45; 
  const locationOfExpense = 'London' 
    
    
  return (
        <div className="expense-item">
          <div>{expenseDate.toISOString()}</div>
          <div className="expense-item__description">
           <h2>{expenseTitle}</h2>
           <div className="expense-item__price">{expenseAmount}</div>
           <div>{locationOfExpense}</div>
          </div>
        </div>
          
        
    )
}

export default ExpenseItem;