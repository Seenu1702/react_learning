const Hello = () => {
  return (
    <div>
      <p>Hello World!</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <p>Greeetings</p>
      <Hello />  
      {/* like functions, components can also be reused */}
      <Hello /> 
      <Hello /> 
    </div>
  )
}

export default App;