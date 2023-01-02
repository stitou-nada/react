import { useState, useMemo } from "react";
import ReactDOM from "react-dom/client";


const App = () => {
  const [count, setCount] = useState(0);

  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  
  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };
  
  return (
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>

  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;