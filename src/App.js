import './App.css';
import Home from './Components/Home/Home'
import Navbar from './Components/Vital/Navbar';
import Footer from './Components/Vital/Footer';
import Cart from './Components/Cart/Cart'
import Contact from './Components/Contact/Contact';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
