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

  // state ={
  //   persons :[
  //     {id:1, name:'nada' , age:21},
  //     {id:2, name:'hicham' , age:21}
  //   ]
  // }
  state={
    input :"",
  }
  AutoShow =(input)=>{
    this.setState({input: input.target.value,
    })
} 
render(){
  
  return(
   <div>
        
         <div>
         <h1>Form input</h1>
          <p>{this.state.input}</p>
         <form>
          <input type="text" onChange={this.AutoShow} />
         
         </form>
    </div>
    </div>
        
  )
}
}
export default App;
