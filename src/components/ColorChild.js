import react, {useState} from 'react';

const ColorChild = (props) => {
  
  return (
    <div>
      <p>My favorite color is {props.childValue} </p>
      
    </div>
  );
}

export default ColorChild;