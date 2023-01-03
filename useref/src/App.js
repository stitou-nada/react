import logo from './logo.svg';
import './App.css';
import React from 'react';
function App() {
  const firstname = React.useRef()
  const age =React.useRef()
  const image =React.useRef()
  return (
    <div>
    <input type="text" ref={firstname}></input>
    <input type="number" ref={age}></input>
    <input type="file"  multiple ref={image}></input>
    <button onClick={()=>console.log(firstname.current.value)}>Print firstname</button>
    <button onClick={()=>console.log(age)}>Print age</button>
    <button onClick={()=>console.log(image.current.files)}>input image</button>
    </div>
  );
}

export default App;
