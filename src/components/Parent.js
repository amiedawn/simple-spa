// goes with Child to show child to parent prop sharing data

import React, {useState} from 'react';
import Child from './Child';

function Parent() {
  const [data, setData] = useState("");

  const childToParent = (childData) => {
    setData(childData);
  }
  return (
    <div>
      {data}
      <div>
        <Child childToParent={childToParent} />
      </div>
    </div>
  );
}

export default Parent;