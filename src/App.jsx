/* eslint-disable react/prop-types */
import './App.css';

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
      <h1>Greeetings</h1>
      <Hello name='Seenu' age='25' />  
      <Hello name='Seenu' age='24' />  
    </div>
  )
}

export default App;