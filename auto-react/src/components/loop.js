import React from "react";

class Persone extends React.Component{
 render(){
    const data = this.props.data
    const show_data = data.map(value =>{
        return(
            <div>
                <p>{value.id}</p>
                <p>{value.name}</p>
                <p>{value.age}</p>
            </div>
        )
    })

   return(
    <div>
      <p> {show_data}</p>
      </div>
   )
}
}


export default Persone ;