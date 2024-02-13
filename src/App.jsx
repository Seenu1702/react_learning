import { Component } from "react";

class Hello extends Component{
  render(){
    return(
      <div>
        <p>Hello Guest!</p>
      </div>
    )
  }
}


class App extends Component{
  render(){
    return (
      <div>
        <Hello />
      </div>
    )
  }
}

export default App;