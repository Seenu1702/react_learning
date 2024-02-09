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
  return (
    <div>
      <h1 style={{color: 'white', background: 'red'}}>Greeetings</h1>
      <Hello name='Seenu' age='25' />  
      <Hello name='Seenu' age='24' />  
    </div>
  )
}

export default App;