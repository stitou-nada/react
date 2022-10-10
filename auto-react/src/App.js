import React from "react";
import Footer from "./components/footer";
import Table from "./components/table";
import { cars } from "./components/cars";


class App extends React.Component{
render(){
  return(

    <div>
       {cars} 
    </div>
  )
}
}
export default App;
