// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/Home';
import Timer from './components/Timer';
import About from './components/about';  // Import the About component

function App() {
  return (
    <Router>
      <div className="homePage">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/about" element={<About />} /> {/* Add About route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
