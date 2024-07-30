import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => { 
    alert('Welcome to Counter App');
  });
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default App;
