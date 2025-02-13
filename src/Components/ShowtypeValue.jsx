import React from "react"
class ShowTypedValue extends React.Component{
    constructor(){
        super()
        this.state={
            showtext:" Thirumala Rao"
        }
    }

    handleinputchange=(e)=>{
        this.setState({showtext:e.target.value})
    }
render(){
    return(
        <>
        <h1>Typed Something : {this.state.showtext}</h1>
       <input type="text"
        placeholder="Write Here ...."
         onChange={this.handleinputchange}
         id="text"
         name="text"
         />
        </>
    )
}
}
export default ShowTypedValue