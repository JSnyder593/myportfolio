import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About"
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
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
