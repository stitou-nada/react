// import { useState, useCallback } from "react";
// import ReactDOM from "react-dom/client";
// import Todos from "./component/todos";

// const App = () => {

//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState([]);

//   const increment = () => {
//     setCount((c) => c + 1);
//   };
//   const addTodo = useCallback(() => {
//     setTodos((t) => [...t, "New Todo"]);
//   }, [todos]);
//   console.log("count render");

//   return (
//     <>
//       <Todos todos={todos} addTodo={addTodo} />
//       <hr />
//       <div>
//         Count: {count}
//         <button onClick={increment}>+</button>
//       </div>
//     </>
//   );
// };
// export default App;

import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  const [CountA, setCountA] = React.useState(0);
  const [CountB, setCountB] = React.useState(0);

  return (
    <div>
      <Count name="A" value={CountA} />
      <Count name="B" value={CountB} />
      <button onClick={() => {console.log("Click button");setCountA(CountA + 1);}}>
        Increment counter A
      </button>
    </div>
  );
}
const Count = React.memo(function Count({ name, value }) {
  console.log(`Rendering Count ${name}`);
  return (
    <div>
      {name}: {value}
    </div>
  );
});



export default App;