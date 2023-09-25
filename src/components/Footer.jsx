import React from 'react'
import {FaArrowUp} from 'react-icons/fa'
import '../App.css'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-text">
      <p>Copyright &copy; 2023 by Yue | All Rights Reserved.</p>
    </div>
  
    <div class="footer-iconTop">
      <a href="#home"><i className='bx bx-up-arrow-alt' ><FaArrowUp/></i></a>
    </div>
  </footer>
  
  )
}

export default Footer