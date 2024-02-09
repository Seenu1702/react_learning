/* eslint-disable react/prop-types */

const Hello = (props) => {
  console.log(props)
  // props will be an object
  return (
    <div>
      <p>Hello { props.name },your age is { props.age }</p>
    </div>
  )
}

const App = () => {

  const appHeaderStyle = {
    color: 'white', 
    background: 'red'
  }

  return (
    <div>
      <h1 style={appHeaderStyle}>Greeetings</h1>
      <Hello name='Seenu' age='25' />  
      <Hello name='Seenu' age='24' />  
    </div>
  )
}

export default App;