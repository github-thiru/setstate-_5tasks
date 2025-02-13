import React from "react"; 
class Counter extends React.Component{
    constructor(){
        super()
      this.state={
        count:0
      }
    }
    Increment=()=>{
this.setState({count:this.state.count + 1})
    }

    reset=()=>{
this.setState({count:this.state.count = 0})
    }

    Decrement=()=>{
this.setState({count:this.state.count -1})
    }

    render(){
        return(
            <>
            <h1>Counter :{this.state.count}</h1>
            <button   disabled={this.state.count >= 100} onClick={this.Increment}>Inc +</button>
            <button   disabled={this.state.count==0}onClick={this.reset}>Reset</button>
            <button  disabled={this.state.count <= 0} onClick={this. Decrement}>Dec -</button>
            </>
        )
    }
}

export default Counter