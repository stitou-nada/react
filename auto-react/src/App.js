import React from "react";
import Footer from "./components/footer";
import Table from "./components/table"
import { cars } from "./components/cars";
import { num  as number} from "./components/students";
import { num } from "./components/student2";
import Cars from "./components/cars";
import Hello from "./components/arrowFunction";
import Fuction from "./components/arrowFunction";
import Stagiaire from "./components/event2";
import Persone from "./components/loop";

class App extends React.Component{

  state ={
    persons :[
      {id:1, name:'nada' , age:21},
      {id:2, name:'hicham' , age:21}
    ]
  }
render(){
  
  return(
   <div>
         <Persone data={this.state.persons} />
    </div>
  )
}
}
export default App;
