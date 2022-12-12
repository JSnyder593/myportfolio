import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/homepage'
import AboutMe from './components/aboutme'
import Projects from './components/projects'
import ContactMe from './components/contactme'
import ErrorPage from './components/errorpage'
import './index.css'

export default function App() {
  return (
    <div className='absolute bg-green-600 h-screen w-screen grid grid-rows-18'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="about" element={<AboutMe />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<ContactMe />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
    </div >
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);


