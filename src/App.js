import logo from './logo.svg';
import './App.css';
import TestHeader from './components/Header.js';
import Nav from './pages/Nav';
import About from './pages/About';
import Shop from './pages/Shop';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <TestHeader name={"Anton"} />
      <Route path="/nav" component={Nav} />
      <Route path="/about" component={About} />
      <Route path="/shop" component={Shop} />
    </div>
    </Router>
  );
}

export default App;
