import React from "react";



class Fuction extends React.Component {

    state = {
        name: "hixam"
    }
    Num =()=>{
     const  variabl = this.state.name
       return variabl

    }
    render() {
        return ( 
            <div >hello {this.Num()}
            <h1> {this.props.nam} </h1>
            <h1> {this.props.title} </h1>
            <h1> {this.props.hixam} </h1>

            </div>
            
        )
    }
}

export default Fuction;