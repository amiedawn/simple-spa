import React from 'react';
import { useState, useEffect, useRef } from 'react';

function RefHook(props) {
  const [inputValue, setInputValue] = useState(" ");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <div>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <h1>Total Count: {count.current}</h1>
    </div>
  );
}

export default RefHook;