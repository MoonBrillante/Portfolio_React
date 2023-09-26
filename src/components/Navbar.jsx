import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'


const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

    return (
    
            <header className="header">
              <a href="#home" className="logo">
                Portafolio
              </a>
              <span
                className="bx bx-menu"
                id="menu-icon"
                onClick={handleClick}
              >
                {click ? (
                  <FaTimes size={30} style={{ color: '#ffffff' }} />
                ) : (
                  <FaBars size={30} style={{ color: '#ffffff' }} />
                )}
              </span>
        
              <nav className={click ? 'navbar active' : 'navbar'}>
                <a href="#home" onClick={closeMenu} className="active">
                  Inicio
                </a>
                <a href="#about" onClick={closeMenu}>
                  Sobre Mi
                </a>
                <a href="#skills" onClick={closeMenu}>
                  Habilidades
                </a>
                <a href="#project" onClick={closeMenu}>
                  Proyectos
                </a>
                <a href="#contact" onClick={closeMenu}>
                  Contacto
                </a>
      
              </nav>
            </header>
          );
        };

export default Navbar
