
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
      <button onClick={() =>
         {console.log("Click button");
         setCountA(CountA + 1);}}>
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