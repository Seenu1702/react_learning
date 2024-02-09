
// our first component
// normal javascript function
// for now it doesn't receive any arguments

const App = () => {

  // returns a html
  const now = new Date();
  const a = 10;
  const b = 20;

  
  return (
    <div>
      <p>Hello World!, it is {now.toString()}</p>
      <p>{ a } plus { b } = {a+b}</p>
    </div>
  )
}

export default App;