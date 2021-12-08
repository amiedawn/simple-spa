import React, {useState} from 'react';
import ColorChild from './ColorChild';


  const ColorParent = () => {
   const [textColor, setTextColor] = useState("");

   const changeColor = (value) => {
     setTextColor(value);
   }
  
  return (
    <div>
      <ColorChild childValue={textColor} />
      <button onClick={() => changeColor("red")}>Red</button>
      <button onClick={() => changeColor("blue")}>Blue</button>
      <button onClick={() => changeColor("green")}>Green</button>
      <button onClick={() => changeColor("orange")}>Orange</button>
    </div>
  );
};

export default ColorParent;