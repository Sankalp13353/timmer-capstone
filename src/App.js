import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/Home';
import Timer from './pages/Timer';

function App() {
  return (
    <Router>
      <div className="homePage">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
