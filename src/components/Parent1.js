import React, {useState} from 'react';
import Child1 from './Child1';
import '../App.css';

function Parent1() {
  const [data, setData] = useState('');

  const parentToChild = () => {
    setData("Data");
  }
  return (
    <div className="App">
      <Child1 data1 = {data} />
      <div>
        <button onClick={() => parentToChild()}>Click to get info from Parent1</button>
      </div>
    </div>
  );
}

export default Parent1;