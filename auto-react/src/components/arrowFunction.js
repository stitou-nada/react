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
            <div >hello {this.Num()} </div>
        )
    }
}

export default Fuction;