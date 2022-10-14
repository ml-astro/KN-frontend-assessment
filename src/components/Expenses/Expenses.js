import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filterYear, selectedYear] = useState("2022");
  const newFilteredExpenses = props.items.filter(item => item.date.getFullYear().toString() === filterYear);
  
  const expensesFilterHandler = (year) => {
    selectedYear(year);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onFilterChange={expensesFilterHandler}
        ></ExpensesFilter>
        <ExpensesList items={newFilteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
