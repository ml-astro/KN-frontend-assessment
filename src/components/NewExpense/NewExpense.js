import React, { useState } from "react";
import "./NewExpense.css";
import "./ExpenseForm";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [formVisible, showForm] = useState(false);
  
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    showForm(false);
  };

  const formVisibleHandler = () => {
    showForm(true);
  }

  const hideFormHandler = () => {
    showForm(false);
  }

    return (<div className="new-expense">
        {!formVisible && <button onClick={formVisibleHandler}>Add new Expense</button>}
        {formVisible && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} formCancelHandler={hideFormHandler} />}
    </div>)
};

export default NewExpense;
