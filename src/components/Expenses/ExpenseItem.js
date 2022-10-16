import "./ExpenseItem.css";
import "./ExpenseDate.js";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";
import React, { useState } from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  console.log("before title " + title);
  console.log(setTitle);

  // const clickHandler = () => {

  //   setTitle("updated");
  // };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">{props.amount + " $"}</div>
        {/* <button onClick={clickHandler}>Change</button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;
