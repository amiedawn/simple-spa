import react, {useState} from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Header from './components/Header';
import NewComp from './components/NewComp';
import MyComp from './components/MyComp';
import HookExample from './components/HookExample';
import HookExample2 from './components/HookExample2';
import UseEffect from './components/UseEffect';
import UseEffectNew from './components/UseEffectNew';
import UseEffectOdd from './components/UseEffectOdd';
import Username from './components/Username';
import Component1 from './components/Component1';
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";
import Component4 from "./components/Component4";
import RefHook from './components/RefHook';
import StyledComponent from './components/StyleComponent';
import Parent1 from './components/Parent1';
import ColorParent from './components/ColorParent';
import DynamicComp from './components/DynamicComp';
import NumberList from './NumberList';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ComponentA from './components/compA/ComponentA';
import ComponentB from './components/compB/ComponentB';
import ComponentC from './components/compC/ComponentC';
import MainComp from './components/MainComp';
import Parent from './components/Parent';
import EventParent from './components/EventParent';
import Sibling1 from './Sibling1';
import Sibling2 from './Sibling2'

// normal way to write functional component
function App() {
  // MainComp example setState
  const [page, setPage] = useState("aboutus");
  
  const numbers = [1,2,3,4,5];
  
  //dynamiccomp example setstate
  const [user, changeUser] = useState("usera");

  // this is to demonstrate 2-way binding
  const [name, setName] = useState("");
  const handleChange = e => {
    setName(e.target.value);
  }

  // pass data between siblings
  const [selectedMessage, setMessage] = useState("");

  return (
    <div className="App">
      <MainComp page={page} />
      <input
        type="radio"
        name="switchpages"
        onClick={() => setPage("aboutus")}
      />
      About Us
      <input
        type="radio"
        name="switchpages"
        onClick={() => setPage("homecomp")}
      />
      Home
      <p>*************</p>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/compA">CompA</Link>
            </li>
            <li>
              <Link to="/compB">CompB</Link>
            </li>
            <li>
              <Link to="/compC">CompC</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/compA" element={<ComponentA />}>
            Component A
          </Route>
          <Route path="/compB" element={<ComponentB />}>
            Component B
          </Route>
          <Route path="/compC" element={<ComponentC />}>
            Component C
          </Route>
        </Routes>
      </BrowserRouter>
      <p>*************</p>
      <NumberList numbers={numbers} />
      <p>*************</p>
      <DynamicComp user={user} />
      <button onClick={() => changeUser("usera")}>Switch to User A</button>
      <button onClick={() => changeUser("userb")}>Switch to User B</button>
      <p>*************</p>
      2-way data binding example (type in the box and that text will appear
      below): <input onChange={handleChange} value={name} />
      <h1>{name}</h1>
      <p>*************</p>
      <ColorParent />
      <p>*************</p>
      {/* parent to child prop sharing */}
      <p>parent to child prop sharing</p>
      <Parent1 />
      <p>***************</p>
      {/* child to parent prop sharing*/}
      <p>child to parent prop sharing</p>
      <Parent />
      <p>***************</p>
      {/* goes with EventParent component to show child to parent prop sharing event */}
      <p>child to parent event(alert) sharing</p>
      <EventParent />
      <p>***************</p>
      {/* //pass data between siblings */}
        <div>
          <p>set a message in sibling 1 and click button to send data to sibling 2</p>
          <Sibling1 setMessage = {setMessage} />
          <Sibling2 selectedMessage = {selectedMessage} />
        </div>
      <p>***************</p>
      <StyledComponent />
      <p>***************</p>
      <RefHook />
      <p>***************</p>
      <Header age="27" />
      <p>***************</p>
      <Navbar />
      <Username />
      <Home name="Amie" />
      <UseEffectOdd />
      <p>***************</p>
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <p>***************</p>
      <NewComp />
      <MyComp />
      <HookExample />
      <HookExample2 />
      <UseEffect />
      <UseEffectNew />
    </div>
  );
};

export default App;
