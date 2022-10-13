import React from "react";


export const carss =['stage1' , 'stage2']

class Stagiaire extends React.Component{
    btn = ()=>{
        return alert(this.state.car1)
    }
    name = ()=> 'Cars name : ';
    state ={
        car1 : carss[0],
        car2 : carss[1],
        car3 : 'nada'
    }
    changeState = ()=>{
        this.setState({
            car3 :'butaina',
        })
    }

    render(){

        return(
            <div>
                <h1>{this.name()}</h1>
                <h2>{this.state.car1}</h2>
                <h2>{this.state.car2}</h2>
                <h2>{this.state.car3}</h2>
                <button onClick={this.btn} >Click</button>
                <button onClick={this.changeState} >change state</button>
            </div>
        )
    }
}
export default Stagiaire ;