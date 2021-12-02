import React, {useState, useEffect} from 'react';

function Timer(props) {

  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  },[count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick = {() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </div>
  );
}

export default Timer;