import React, { useState, useEffect } from "react";

function UseEffectOdd(props) {
  const [count, setCount] = useState(0);
  const [odd, setOdd] = useState("odd");

  useEffect(() => {
    setOdd(() => count % 2 === 0 ? "even" : "odd");
  }, [count]);
    //}); // use this if you want it to run
  // }, []); // use this if you want it to stop

  return (
    <div>
      <p>You've clicked {count} times.</p>
      <p>The number of times you have clicked is {odd}.</p>
      <button onClick={() => setCount((c) => c + 1)}>Click Me</button>
    </div>
  );
}

export default UseEffectOdd;
