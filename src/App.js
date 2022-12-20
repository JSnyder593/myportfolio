import React from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About"
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>This page doesn't exist!</h1>} />
        </Routes>
        <Footer />
      </Router>
    </div>

  );
}

export default App;
