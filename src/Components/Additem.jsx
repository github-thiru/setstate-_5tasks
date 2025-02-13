import { Component } from "react";

class Additem extends Component{
    constructor(){
        super()
        this.state={
             text:"text",
             items:[]
        }
    }
handleinputchange=(e)=>{
    this.setState({text:e.target.value})
}
   
handleadd=()=>{
    
    this.setState({items:[...this.state.items,this.state.text],text:""})
}
    render(){
        return(
            <>
            <h2>Write & Add Here</h2>
            <input type="text"
             placeholder="write " 
             onChange={this.handleinputchange}
             />
            <button onClick={this.handleadd}>Add</button>
            <ul>
                {this.state.items.map((value,index)=>(
                    <>
                       <li key={index}>{value}</li>
                       </>
                ))}
            </ul>
            </>

        )
    }
}

export default Additem