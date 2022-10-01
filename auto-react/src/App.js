import React from "react";
import Footer from "./components/footer";
import Table from "./components/table";
import { num  as number} from "./components/students";
import { num } from "./components/student2";

class App extends React.Component{
render(){
  console.log(number)
  return(

    <div>
      
      <h1>{number[1].stagiaire4}</h1>
      <h1> {num[1]}</h1>
    </div>
  )
}
}
export default App;
