import React from "react";


export const carss =['stage1' , 'stage2']

class Stagiaire extends React.Component{
    btn = ()=>{
        return alert(this.state.car1)
    }
    name = ()=> 'Cars name : ';
    state ={
        car1 : carss[0],
        car2 : carss[1]
    }

    render(){

        return(
            <div>
                <h1>{this.name()}</h1>
                <h2>{this.state.car1}</h2>
                <h2>{this.state.car2}</h2>
                <button onClick={this.btn} >Click</button>
            </div>
        )
    }
}
export default Stagiaire ;