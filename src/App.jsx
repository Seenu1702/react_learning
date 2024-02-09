
// our first component
// normal javascript function
// for now it doesn't receive any arguments

const App = () => {

  // returns a html
  const now = new Date();

  
  return (
    <div>
      <p>Hello World!, it is {now.toString()}</p>
    </div>
  )
}

export default App;