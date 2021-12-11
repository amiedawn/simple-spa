import { useState } from "react";
import "./App.css";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Header from './components/Header';
import NewComp from './components/NewComp';
import MyComp from './components/MyComp';
import HookExample from './components/HookExampleCounter';
import HookExample2 from './components/HookExampleCar';
import UseEffect from './components/UseEffect';
import UseEffectNew from './components/UseEffectNew';
import UseEffectOdd from './components/UseEffectOdd';
import Username from './components/Username';
import Component1 from './components/Component1';
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";
import Component4 from "./components/Component4";
import RefHook from './components/RefHook';
import StyledComponent from './components/StyledComponent';
import Parent1 from './components/Parent1';
import ColorParent from './components/ColorParent';
import DynamicComp from './components/DynamicComp';
import NumberList from './components/NumberList';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ComponentA from './components/compA/ComponentA';
import ComponentB from './components/compB/ComponentB';
import ComponentC from './components/compC/ComponentC';
import MainComp from './components/MainComp';
import Parent from './components/Parent';
import EventParent from './components/EventParent';
import Sibling1 from './components/Sibling1';
import Sibling2 from './components/Sibling2'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import UserForm from "./components/UserForm";

// normal way to write functional component
function App1() {


  // MainComp example setState
  const [page, setPage] = useState("aboutus");

  // array to map over for NumberList
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
      <p>*** UserForm start ********** </p>
      <UserForm />
      <p>*** UserForm end ********** </p>
      <p>*** MainComp, AboutUs, HomeComp start ********** </p>
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
      <p>*** MainComp, AboutUs, HomeComp end ********** </p>
      <p>*** ComponentA, ComponentB, ComponentC start**********</p>
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
      <p>*** ComponentA, ComponentB, ComponentC end**********</p>
      <p>*** NumberList start **********</p>
      {/* list of numbers to be squared */}
      <NumberList numbers={numbers} />
      <p>*** NumberList end **********</p>
      <p>*** DynamicComp, UserA, UserB start **********</p>
      <DynamicComp user={user} />
      <button onClick={() => changeUser("usera")}>Switch to User A</button>
      <button onClick={() => changeUser("userb")}>Switch to User B</button>
      <p>*** DynamicComp, UserA, UserB end **********</p>
      <p>
        *** (does not use a component, only state in App.js) start **********
      </p>
      2-way data binding example (type in the box and that text will appear
      below): <input onChange={handleChange} value={name} />
      <h1>{name}</h1>
      <p>*** (does not use a component, only state in App.js) end **********</p>
      <p>*** ColorParent and ColorChild start **********</p>
      <ColorParent />
      <p>*** ColorParent and ColorChild end **********</p>
      <p>**** Parent1 and Child1 start *********</p>
      {/* parent to child prop sharing */}
      <p>parent to child prop sharing</p>
      <Parent1 />
      <p>**** Parent1 and Child1 end *********</p>
      <p>*** Parent and Child start ************</p>
      {/* child to parent prop sharing*/}
      <p>child to parent prop sharing</p>
      <Parent />
      <p>*** Parent and Child end ************</p>
      <p>*** EventParent and EventChild start ************</p>
      {/* goes with EventParent component to show child to parent prop sharing event */}
      <p>child to parent event(alert) sharing</p>
      <EventParent />
      <p>*** EventParent and EventChild end ************</p>
      <p>*** ParentSiblings, Sibling1 and Sibling2 start ************</p>
      {/* pass data between siblings */}
      <div>
        <p>
          set a message in sibling 1 and click button to send data to sibling 2
        </p>
        <Sibling1 setMessage={setMessage} />
        <Sibling2 selectedMessage={selectedMessage} />
      </div>
      <p>*** ParentSiblings, Sibling1 and Sibling2 end ************</p>
      <p>*** StyledComponent start ************</p>
      <StyledComponent />
      <p>*** StyledComponent end ************</p>
      <p>*** RefHook start ************</p>
      <RefHook />
      <p>*** RefHook end ************</p>
      <p>*** UserName setState start ************</p>
      <Username />
      <p>*** UserName end ************</p>
      <p>*** Simple Spa homework: Header, Navbar, start ************</p>
      <Header age="27" />
      <Navbar />
      <Home name="Amie" />
      <p>
        *** Component1, Component2, Component3, Component4 prop drilling start
        *******
      </p>
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <p>
        *** Component1, Component2, Component3, Component4 prop drilling end
        ******
      </p>
      <p>*** UseEffectOdd useState and useEffect counter start ************</p>
      <UseEffectOdd />
      <p>*** UseEffectOdd useState and useEffect counter end ************</p>
      <p>
        ***NewComp change test by click button or change image by clicking on it
        start ***
      </p>
      <NewComp />
      <p>
        ***NewComp change test by click button or change image by clicking on it
        end ***
      </p>
      <p>***MyComp click on button to change text (class, props) start ***</p>
      <MyComp />
      <p>***MyComp click on button to change text (class, props) end ***</p>
      <p>*** HookExample simple counter with state start ************</p>
      <HookExample />
      <p>*** HookExample simple counter with state end ************</p>
      <p>*** HookExample2 hook example state start ************</p>
      <HookExample2 />
      <p>*** HookExample2 hook example state end ************</p>
      <p>*** UseEffect counter infinite until you stop with [] start ***</p>
      <UseEffect />
      <p>*** UseEffect counter infinite until you stop with [] end ***</p>
      <p>*** UseEffectNew usestate and useEffect w/ calc start ************</p>
      <UseEffectNew />
      <p>*** UseEffectNew usestate and useEffect w/ calc end ************</p>
    </div>
  );
}

export default App1;
