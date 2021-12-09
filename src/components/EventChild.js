// goes with EventParent component to show child to parent prop sharing event

import React from "react";

export default function Child ({childToParent}) {
  
  return (
    <div>
      <button onClick={() => childToParent()}>Click Child</button>
    </div>
  );
};
