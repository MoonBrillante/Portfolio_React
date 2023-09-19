import React from 'react'
import './About.css'
import about from './images/about.png';
import {DiScrum} from 'react-icons/di'
import { SiFuturelearn} from 'react-icons/si'
import {HiOutlineCode } from 'react-icons/hi'
import {LiaLaptopCodeSolid} from 'react-icons/lia'

const Hero = () => {
    return (
        <section className="about" id="about">
          <div class="about-img">
          <img src={about} alt=""/>
        </div>
          
        <div className="about-content">
          <h2 className="heading">Sobre <span>Mi</span></h2>
          <h3>Junior Full Stack Desarrollador</h3>
            <p>Soy un Junior Desarrollador Full Stack Junior formado en Factoría F5.</p>
            <span class="aboutme"><LiaLaptopCodeSolid size={20}/>Front End</span>
            <p>Tengo un sólido conocimiento de tecnologías de frontend como HTML, CSS y JavaScript, y tengo experiencia con React para construir diseños dinámicos, receptivos y animados</p> 
            <span class="aboutme"><HiOutlineCode size={20}/>Back end</span>
            <p>También tengo experiencia con Java Spring Boot para el desarrollo de APIs. Además, tengo experiencia utilizando Python y Django para crear un blog.</p>
            <span class="aboutme"><SiFuturelearn size={15}/>Autodidacta</span>
            <p>He aprendido a estudiar a partir de libros y recursos en línea, incluyendo búsquedas en Google, interpretación de mensajes de error y comprensión de documentación.</p>
            <span class="aboutme"><DiScrum size={25}/>Trabajo en equipo</span>
            <p>Mis experiencias más gratificantes en programación implican trabajar con otros. Creo firmemente en el poder de la sinergia en equipo.</p>
          </div>
      </section>
      
);
}
export default Hero;
