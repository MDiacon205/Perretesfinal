import './App.css';
import Home from './Components/Home/Home'
import Navbar from './Components/Vital/Navbar';
import Footer from './Components/Vital/Footer';
import Cart from './Components/Cart/Cart'
import Contact from './Components/Contact/Contact';
import { Routes, Route } from 'react-router-dom'
import { ThemeContext } from './Components/Vital/ThemeContext';
import { useContext } from 'react';
import { useState } from 'react';
import ProductInfo from './Components/Vital/ProductInfo';

function App() {
  let { DarkMode }= useContext(ThemeContext)
  
  return (
      <div className="App">
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route path=":productId" element={<ProductInfo/>} />
          </Routes>
        </div>

      </div>
  );
}

export default App;
