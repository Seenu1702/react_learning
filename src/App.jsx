/* eslint-disable react/prop-types */
import { Component } from "react";

class Hello extends Component{
  render(){
    // console.log(this.props);

    const {name} = this.props;

    return(
      <div>
        {/* <p>Hello {this.props.name}!</p> */}
        <p>Hello {name}!</p>

      </div>
    )
  }
}


class App extends Component{
  render(){
    return (
      <div>
        <Hello name="Seenu"/>
      </div>
    )
  }
}

export default App;