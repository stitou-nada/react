import { useState, useCallback } from "react";
import ReactDOM from "react-dom/client";


const App = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback (()=>
  {setCount((c) => c + 1);
    console.log("increment")
  },[]); 
    
  
  return (
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>

  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;