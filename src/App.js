
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Header from './components/Header';

// normal way to write functional component
function App() {
  return (
    <div className="App">
      <Header age="27"></Header>
      <Navbar></Navbar>
      <Home name="Amie"></Home>
    </div>
  );
}

export default App;
