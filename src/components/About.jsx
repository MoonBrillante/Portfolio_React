import React from 'react';
import './About.css';
import about from './images/about.png';
import { DiScrum } from 'react-icons/di';
import { SiFuturelearn } from 'react-icons/si';
import { HiOutlineCode } from 'react-icons/hi';
import { LiaLaptopCodeSolid } from 'react-icons/lia';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={about} alt="" />
      </div>

      <div className="about-content">
        <h2 className="heading">Sobre <span>Mi</span></h2>
        <h3>Desarrolladora Junior Full Stack</h3>
        <p>Soy una desarrolladora junior Full Stack formada en Factoría F5.</p>
        <span className="aboutme"><LiaLaptopCodeSolid size={20}/>Front End</span>
        <p>Poseo un sólido conocimiento de tecnologías de frontend como HTML, CSS y JavaScript. Tengo experiencia con React para construir diseños dinámicos, interactivos y animados.</p> 
        <span className="aboutme"><HiOutlineCode size={20}/>Back end</span>
        <p>Tengo experiencia con Java Spring Boot para el desarrollo de APIs. Además, poseo amplio conocimiento y capacidad en el trabajo con Python y Django para crear blogs.</p>
        <span className="aboutme"><SiFuturelearn size={15}/>Autodidacta</span>
        <p>Una parte importante de mi formación la obtuve a partir de libros y utilizando recursos en línea, incluyendo búsquedas en Google, obteniendo los certificados correspondientes, interpretación de mensajes de error y comprensión de documentación.</p>
        <span className="aboutme"><DiScrum size={25}/>Trabajo en equipo</span>
        <p>Mis experiencias más gratificantes en programación implican trabajar con otras personas. Creo firmemente en el poder de las sinergias de las personas de un equipo.</p>
      </div>
    </section>
  );
};

export default About;
