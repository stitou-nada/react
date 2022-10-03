import React from "react";



class Fuction extends React.Component {

    state = {
        name: "hixam"
    }
    Num =()=>{
        return this.state.name

    }
    render() {
        return ( 
            <div >hello {this.Num()}
            <h1> {this.props.nam} </h1>
            <h1> {this.props.title} </h1>

            </div>
            
        )
    }
}

export default Fuction;