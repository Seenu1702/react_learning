import { Component } from "react";

class App extends Component{

  // class component life cycle

  // Called immediately after a component is mounted. Setting state here will trigger re-rendering.
  componentDidMount(){
    console.log('component mounted');
  }

  // Called immediately after component updated occurs in DOM and called on state/props changes Not called for the initial render.
  componentDidUpdate(){
    console.log('component updated');
  }

  componentWillUnmount(){
    // invoked just before the component removed from the DOM
    // releasing memory or resources
    // detaching the events/
    // cancelling timers
    
  }


  render(){
    return(
      <div>Hello!</div>
    )
  }
}
export default App;