
import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Price from './pages/Price';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import ServiceDetails from './pages/ServiceDetails';
export default App;

function App() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('fs_dark_mode') === '1');
  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/about" element={<About darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/service" element={<Service darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/price" element={<Price darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/portfolio" element={<Portfolio darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/contact" element={<Contact darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/service-details" element={<ServiceDetails darkMode={darkMode} setDarkMode={setDarkMode} />} />
      </Routes>
    </Router>
  );
}
