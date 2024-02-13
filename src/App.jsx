//  import React from 'react'; // not required from react17



// Function Component
// function App() {
//   return (
//     <div>App</div>
//   )
// }

// export default App;

// Class Component
import { Component } from "react";
class App extends Component{
  render(){         //override the render method
    return(
      <div>Hello World!</div>
    )
  }
}

export default App;