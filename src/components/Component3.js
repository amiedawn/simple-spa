// prop drilling in Components1 - Components4

import React from "react";
import Component4 from "./Component4";

function Component3() {
  return (
    <div>
      <h1>in component 3</h1>
      <Component4 />
    </div>
  );
}

export default Component3;
