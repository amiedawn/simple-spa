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

//import UseEffectOdd from './components/UseEffectOdd';

// normal way to write functional component
function App() {
  return (
    <div className="App">
      <Header age="27" />
      <Navbar />
      <Username />
      <Home name="Amie" />
     <UseEffectOdd />

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
