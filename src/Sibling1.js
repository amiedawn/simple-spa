// this goes with Sibling2 and ParentSiblings to pass data
import React from 'react';

export default function Sibling1({setMessage}) {
  const onButtonClick = (changeValue) => {
    setMessage(changeValue)
  }
  return (
    <div>
      <button onClick={() => onButtonClick("message from sibling 1")}>Sibling 1</button>
    </div>
  );
}

