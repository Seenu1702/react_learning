/* eslint-disable no-unused-labels */
import { Component } from "react";

class App extends Component{

  constructor(props){
    super(props); //to call the parent class constructor

    this.state = {
      count: 0,
    }

  }

  handlePlusClick = ()=>{
    this.setState((prevState) =>({
      count: prevState.count + 1,
    }))
  }

  handleMinusClick = () =>{
   if(this.state.count > 0){
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }))
   } 
  }

  handleResetClick = () =>{
    this.setState({
      count: 0,
    })
  }

  render(){
    return(
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handlePlusClick}>Plus</button>
        <button onClick={this.handleMinusClick}>Minus</button>
        <button onClick={this.handleResetClick}>Reset</button>

      </div>
    )
  }
}
export default App;