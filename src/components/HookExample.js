import React, { useState } from 'react';

function HookExample(props) {
  const [count, setCount] = useState(0);
  //const [color, setColor] = useState("Red");
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick = {() => setCount(count + 1)}>Click to add 1</button>
    </div>
  );
}

export default HookExample;