// Nested Component
import React from "react";

export const car = ["voi1","voi2"];

class Cars extends React.Component{
    state ={
        car1 : car[0],
        car2 : car[1]
    }
    render(){
        return(
            <div>
                <h1>num de voi : </h1>
                <h1>{this.state.car1}</h1>
                <h1>{this.state.car2}</h1>
            </div>
        )
    }
}

export default Cars ;
