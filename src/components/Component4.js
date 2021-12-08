import React, {useContext} from "react";
import {UserContext} from './Component1';

function Component4() {
  const user = useContext(UserContext);
  return (
    <div>
      <h1>in component 4</h1>
      <p>Hello again {user}!</p>
    </div>
  );
}

export default Component4;
