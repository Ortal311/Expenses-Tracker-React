import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [isValidTitle, setIsValidTitle] = useState(true);
  const [isValidAmount, setIsValidAmount] = useState(true);
  const [isValidDate, setIsValidDate] = useState(true);

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };

  const sumbitHandler = (event) => {
    event.preventDefault();

    if (enteredTitle === "" || enteredAmount === "" || enteredDate === "") {
      if (enteredTitle === "") {
        setIsValidTitle(false);
      } else setIsValidTitle(true);

      if (enteredAmount === "") {
        setIsValidAmount(false);
      } else setIsValidAmount(true);
      if (enteredDate === "") {
        setIsValidDate(false);
      } else setEnteredDate(true);
    } else {
      setIsValidTitle(true);
      setIsValidAmount(true);
      setIsValidDate(true);
      const expenseData = {
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate),
      };

      props.onSaveExpenseData(expenseData);
      //back to empty - after we saved the users input
      setEnteredTitle("");
      setEnteredAmount("");
      setEnteredDate("");
    }
  };

  return (
    <form onSubmit={sumbitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title </label>
          <input
            style={{ background: !isValidTitle ? "salmon" : "white" }}
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount </label>
          <input
            style={{ background: !isValidAmount ? "salmon" : "white" }}
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date </label>
          <input
            style={{ background: !isValidDate ? "salmon" : "white" }}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="sumbit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
