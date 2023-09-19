import React from 'react'
import './Home.css'
import home from './images/home.png';
import {FaLinkedinIn} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import {FiGithub} from 'react-icons/fi'


const Home = () => {
    return (
        <section class="home" id="home">
<div className="home-content">
            <h3>Hola,</h3>
            <h1>Soy Yue</h1>
            <h3>Junior<span className="multiple-text"> desarrolladora Full Stack</span></h3>
        <p>Soy una junior desarrolladora Full Stack, con una pasión una pasión incansable por escribir código limpio, bien estructurado y elegante para dar vida a las ideas.</p>
        <div className='social-media'>
            <a href="https://www.linkedin.com/in/yueming-zhang-7a6a63b8/" target="_blank"><i className='linkedin' ><FaLinkedinIn/></i></a> 
            <a href="https://github.com/MoonBrillante" target="_blank"><i className='github' ><FiGithub/></i></a>     
            <a href="mailto:yuemingz2011@hotmail.com" target="_blank"><i className="email" ><AiOutlineMail/></i></a>
        </div>
        <a href="mailto:yuemingz2011@hotmail.com"  className="btn" target="_blank">contáctame</a>
    </div>
    <div className="home-img">
        <img src={home} alt=""/>
    </div>
</section>
);
}
export default Home