import './App.css';
import Home from './Components/Home/Home'
import Navbar from './Components/Vital/Navbar';
import Footer from './Components/Vital/Footer';
import Cart from './Components/Cart/Cart'
import Contact from './Components/Contact/Contact';
import { Routes, Route } from 'react-router-dom'
import ThemeContext from './Components/Vital/ThemeContext';
import { useContext } from 'react';
import { useState } from 'react';

function App() {
  let isDarkMode = useContext(ThemeContext)
  
  return (
    <ThemeContext.Provider value={isDarkMode}>
      <div className="App">
        <div className={isDarkMode === 'false' ? 'bg-light' : 'bg-secondary'}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
