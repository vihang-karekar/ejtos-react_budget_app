import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if(event.target.value > 20000) {
            alert("The Budget value cannot exceed fund limit £"+20000);
            return;
        }

        if (expenses) {
            const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
            }, 0);
            if(event.target.value <totalExpenses) {
                alert("You cannot reduce the budget value lower than the spending.");
                return;
            }
        }
        
        setNewBudget(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;