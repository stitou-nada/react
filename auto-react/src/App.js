import React from "react";
import Footer from "./components/footer";
import Table from "./components/table";
import { num  as number} from "./components/students";
import { num } from "./components/student2";
import Cars from "./components/cars";
import Hello from "./components/arrowFunction";
import Fuction from "./components/arrowFunction";

class App extends React.Component{

  state = {
    namee :"cc butaina"
  }
render(){
  
  return(
   <div>
    <h1> <Fuction nam="mliki" title="react"  hixam={this.state.namee} /> </h1>
    <h1>   </h1>
    </div>
  )
}
}
export default App;
