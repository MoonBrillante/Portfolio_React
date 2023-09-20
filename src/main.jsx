import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skill from './components/Skill'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'

import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <About />
    <Skill/>
    <Project/>
    <Contact /> 
    <Footer />
  </React.StrictMode>,
)
