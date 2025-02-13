import { Component } from "react";

class Toggle extends Component{
    constructor(){
        super()
        this.state={
            name:"Thirumala Rao",
            name1:"kg",
            isvisible:true
        }
    }
  Toggle=()=>{
    this.setState({isvisible:!this.state.isvisible})
  }


    render(){
        return( 
            <>
            <h1>Toggle:</h1>
            <h3>{this.state.isvisible ?this.state.name:" "}</h3>
            <button onClick={this.Toggle}>{this.state.isvisible?"Hide":"show"}</button>
           
            </>
        )
    }
}

export default Toggle