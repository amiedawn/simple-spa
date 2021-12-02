import React, { useState, useEffect } from 'react';


function Timer(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  //}); // use this if you want it to run
    }, []); // use this if you want it to stop


  return (
    <div>
      <h1>I have rendered {count} times.</h1>
    </div>
  );
};

export default Timer;