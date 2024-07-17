
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Navbar from './components/NavBar/NavBar';
import Projects from './components/Projects/Projects';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
