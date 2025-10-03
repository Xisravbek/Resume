
import './App.css';
import Left from './components/Left/Left';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className=" container">
      <div className='App'>
        <Left />
        <Main />
        <Navbar />
      </div>
    </div>
  );
}

export default App;
