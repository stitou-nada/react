import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';
function App() {
  const [count , setCount]=React.useState(0);
  return (
    <div className="App">
      <button onClick={()=>setCount(count+1)}>ADD</button>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
