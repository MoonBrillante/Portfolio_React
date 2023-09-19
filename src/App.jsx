import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './Components/About'
import Skill from './components/Skill'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Navbar />
    <Home/>
    <About />
    <Skill/>
    <Project/>
    <Contact /> 
    <Footer />
    </>
  );
}

export default App;