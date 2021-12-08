// goes with Parent component to show child to parent prop sharing

import React from 'react';

export default function Child ({childToParent}) {
  const data = "This is data from Child component passing to the Parent component";
  return (
    <div>
      <h3>This example shows child to parent prop passing</h3>
      <button onClick={() => childToParent(data)}>Click Child</button>
    </div>
  );  
};
