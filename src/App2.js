import { useState } from "react";
import "./App.css";
import AnimalComp1 from './components/AnimalComp1';


// normal way to write functional component
function App2() {
  const [name, setName] = useState("cat");

  return (
    <div className="App">
     
      <AnimalComp1 name={name} />
      <input type="radio" name="switchanimal" onClick={() => setName("cat")} />
      Cat
      <input type="radio" name="switchanimal" onClick={() => setName("dog")} />
      Dog
    </div>
  );
};


export default App2;

