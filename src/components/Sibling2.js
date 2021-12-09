// this goes with Sibling1 and ParentSiblings to pass data
import React from 'react';

export default function Sibling2({selectedMessage}) {
  return (
    <div>
      <p>{selectedMessage}</p>
    </div>
  );
};