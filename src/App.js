
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Header from './components/Header';

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
}

export default App;
