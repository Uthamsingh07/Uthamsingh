import React,{Component} from "react";


class NameAge extends Component{

    state = {

        name:"John Cena.",
        age : 48
    }
    ChangeFunction =() =>{ 
        if(this.state.name=="John Cena"){
      this.setState({name : "Roman Reigns"})
      this.setState ({age : 100})
        }else{
            this.setState({name : "John Cena"})
      this.setState ({age : 49}) 
        }
    }  
 render(){
    return(
        <>
        <h1>Name :{this.state.name}</h1>
        <h1>Age : {this.state.age}</h1>
        <button onClick={this.ChangeFunction}>Change</button>
        </>
    )
   }
}

export default NameAge