/* eslint-disable react/prop-types */
import { Component } from "react";

class Hello extends Component{
  render(){
    // console.log(this.props);

    const {name, age} = this.props;

    return(
      <div>
        {/* <p>Hello {this.props.name}!</p> */}
        <p>Hello {name}! your age is {age}</p>

      </div>
    )
  }
}


class App extends Component{
  render(){
    return (
      <div>
        <Hello name="Seenu" age={25}/>
      </div>
    )
  }
}

export default App;