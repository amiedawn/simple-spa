//goes with Parent1 to show parent to child prop sharing

import React from 'react';


function Child1(props) {
  return (
    <div>
      <h1>This is the child {props.data1} component.</h1>
    </div>
  );
}

export default Child1;