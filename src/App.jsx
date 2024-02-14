/* eslint-disable react/prop-types */
import React from 'react';


function GrandChildComponent({parentData}) {
  console.log(`From Grand Child Component, ${parentData}`)
  return(
    <div>
      <h3>Grand Child Component</h3>
    </div>
  )
}


function ChildComponent({parentData}) {
  console.log(`From Child Component, ${parentData}`)
  return(
    <div>
      <h2>Child Component</h2>
      <GrandChildComponent parentData={parentData}/>
    </div>
  )
}

function App() {

  const parentData = 'Hello from Parent'
 console.log(`From Parent Component, ${parentData}`)
  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent parentData={parentData}/>
    </div>
  )
}

export default App;