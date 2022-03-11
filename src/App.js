import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Footer from './components/pages/Footer/Footer';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <Router>
      <Navbar/>
      <Home/>
      <Pricing/>
      <Footer/>
    </Router>
  );
}

export default App;
