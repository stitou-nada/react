import { useState,  memo } from "react";
import ReactDOM from "react-dom/client";
import React from "react";


 const App = () => {
  const [count, setCount] = useState(0);


  const increment = () => {
    setCount((c) => c + 1);
    console.log("ra ki t3awed")
  };
  
  // const expensiveCalculation = (num) => {
  //   console.log("Calculating...");
  //   for (let i = 0; i < 1000000000; i++) {
  //     num += 1;
  //   }
  //   return num;
  // };
  
  return (
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
      
        hhhh
      </div>

  );
 };



export default memo(App);