import React from 'react'
import Navbar from './components/Navbar.jsx' // Fix the import (remove curly braces)
import { BrowserRouter, Routes, Route } from 'react-router-dom' // Fix the imports
import Footer from './components/footer.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Competences from './components/Competences.jsx' 
import Contact from './components/Contact.jsx'


function App() {
  return (
    <BrowserRouter> {/* Use BrowserRouter instead of Router */}
    <Navbar />
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/competences" element={<Competences/>} />
      <Route path="/contact" element={<Contact/>} />
      </Routes>
    <Footer />
    </BrowserRouter>

  )
}

export default App