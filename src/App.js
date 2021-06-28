import logo from './logo.svg';
import './App.css';
import NavBar from './utils/navBar/NavBar'
import Sales from './views/sales/Sales.jsx'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Sales/>
    </div>
  );
}

export default App;
