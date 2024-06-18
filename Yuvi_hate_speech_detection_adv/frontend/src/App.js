// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import HateSpeechDetection from './components/Speech';
import SpeechDetection from './components/SpeechtToText';
import FileDetection from './components/FileUpload';
import Contact from './components/Contact';
import Lottie from 'lottie-react';
import animationData from './animation/Animation - 1717348737803.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading && (
        <div className="loader-container">
          <Lottie animationData={animationData} style={{ width: "30rem", height: "30rem" }} />
        </div>
      )}
      {!loading && (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/hate-speech" element={<HateSpeechDetection />} />
            <Route path="/speech" element={<SpeechDetection />} />
            <Route path="/file" element={<FileDetection />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
};

export default App;
