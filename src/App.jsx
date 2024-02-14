import React, { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    document.title = `Count: ${count}`
  },[count]);

  const handleClick = () => {
    setCount(count + 1);
  }
console.log(count);

  return (
    <div>
      <h1>Document Title Change</h1>
      <button onClick={handleClick}>Change Count</button>
    </div>
  )
}

export default App;