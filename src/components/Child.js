// goes with Parent component to show child to parent prop sharing data

import React from 'react';

// export default function Child ({childToParent}) {
//   const data = "This is data from Child component passing to the Parent component";
//   return (
//     <div>
//       <button onClick={() => childToParent(data)}>Click Child</button>
//     </div>
//   );  
// };

//other option is through props
export default function Child (props) {
  const data = "This is data from Child component passing to the Parent component";
  return (
    <div>
      <button onClick={() => props.childToParent(data)}>Click Child</button>
    </div>
  );  
};
