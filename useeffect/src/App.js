import logo from './logo.svg';
import './App.css';
import React from 'react';
function App() {
  const[title , setTitle]= React.useState("react hooks");


  React.useEffect(()=>{
    // component did mount
     document.title=title;
    return ()=>{
    // component will unmount
    };
  },[])
  return (
    <div className="App">
     <button onClick={()=>setTitle("hello")}>change title</button>
    </div>
  );
}

export default App;
