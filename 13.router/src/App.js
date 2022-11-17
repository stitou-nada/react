import logo from './logo.svg';
import './App.css';
import About from'./component/about';
import Home from './component/home';
import Navbar from './component/navbar';
import {BrowserRouter, Routes , Route } from "react-router-dom";


  
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
