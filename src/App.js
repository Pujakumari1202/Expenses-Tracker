import React,{useState} from 'react';
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from './Components/NewExpense/NewExpense';
import "./App.css";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.17,
    date: new Date(2021, 7, 14),
  },
  { id: "e2", title: "New Tv", amount: 799.49, date: new Date(2022, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.17,
    date: new Date(2024, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk(Wooden)",
    amount: 450,
    date: new Date(2024, 5, 12),
  },
];

const App = () =>{
  const [expenses,setExpenses]=useState(DUMMY_EXPENSES);

  const onAddExpenseHandler=(expense)=>{
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses];
    });
    console.log(DUMMY_EXPENSES);
  };
  
   
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2',{},"Let's get started"),
  //   React.createElement(Expenses,{items:expenses})
  // );
  //  const appExpenseHandler=expense=>{
  //   console.log('In App.js');
  //   console.log(expenses);
  //  };


  return (
    <div>
       <NewExpense onAddExpense={onAddExpenseHandler}/>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
