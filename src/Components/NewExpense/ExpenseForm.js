import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setenteredTitle] = useState("");
  const [enteredaAmount, setenteredAmount] = useState("");
  const [enteredDate, setenteredDate] = useState("");
  //or
  // const [userInput,setuserInput]=useState({
  //         enteredTitle:'',
  //         enteredAmount:'',
  //         enteredDate:''
  // });

  const titleChangeHandler = (event) => {
    setenteredTitle(event.target.value);
    //or
    // setuserInput({
    //     ...userInput,
    //     enteredTitle:event.target.value,
    // })
    //or
    // setuserInput((prevState)=>{
    //     return {...prevState, enteredTitle:event.target.value};
    // });
  };
  const amountChangeHandler = (event) => {
    setenteredAmount(event.target.value);
    // setuserInput({
    //     ...userInput,
    //     enteredAmount:event.target.value,
    // })
  };
  const dateChangeHandler = (event) => {
    setenteredDate(event.target.value);
    // setuserInput({
    //     ...userInput,
    //     enteredDate:event.target.value,
    // })
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredaAmount,
      date: new Date(enteredDate),
    };
    props.onsaveExpenseData(expenseData);
    setenteredTitle('');
    setenteredAmount('');
    setenteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredaAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2024-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
