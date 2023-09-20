import React from 'react'
import { FaList } from 'react-icons/fa'
import {AiFillCaretUp} from 'react-icons/ai'
import './Skill.css'

const Skill = () => {
    return (
        <section className="skills" id="skills">
            <div className="skills-container">
                <h2 className="heading">Habilidades <span></span></h2>
                    <div className="job-wrapper ">
                    <div>
                        <h3>Web Full Stack | <span>Factoría F5</span></h3>
                        <h4><span>Mayo 2023 - Oct 2023</span></h4>
                    </div>
                    <div className="job-description ">
                        <h3>Desarrollo de Webs :</h3>
                        <span><FaList size={20} /></span>
                        <p>
                        Destacaría las siguientes habilidades que he reforzado y desarrollado en el Bootcamp de Factoría F5:  
                        </p>
                        <p><span><AiFillCaretUp size={20}/></span> Mi capacidad para trabajar en equipo utilizando metodologías Agile y Scrum.</p>
                        <p><span><AiFillCaretUp size={20}/></span> El uso de tecnologías HTML, CSS, JavaCript, React</p>
                        <p><span><AiFillCaretUp size={20}/></span> Capacidad para programar con Python y Django</p>
                        <p><span><AiFillCaretUp size={20}/></span> Herramientas como Figma, Trello, VS Code, Git y GitHub</p>
                        <br />
                        <h3 >Poseo las certificaciones :</h3>
                        <span><FaList size={20} /></span>
                        <p><span><AiFillCaretUp size={20}/></span> Tableau Desktop Specialist (Tableau) (2023)</p>
                        <p><span><AiFillCaretUp size={20}/></span> Google Data Analytics Professioal Certificate (2022)</p>
                        <p><span><AiFillCaretUp size={20}/></span> Microsoft Master Data Science (edX-UC San Diego) (2018-2019)</p>
                    
                    </div>
                </div>


              

                <div className="job-wrapper ">
                    <div>
                        <h3>Mi Proyecto </h3>
                        <h4><span>2018 - 2019</span></h4>
                    </div>
                    <div className="job-description ">
                        <h3>Mi Blog</h3>
                        <span><FaList size={20} /></span>
                        <p>
                            Cuando estaba haciendo un curso de ciencia de datos, aprendí a usar python y dijango para crear un blog, una tienda online de productos...</p>
                        <p><a href="http://moon.pythonanywhere.com/" target={'_blank'}><span><strong>Mi Blog example</strong></span></a></p>


                        <p>
                            <a href="http://lunar.pythonanywhere.com/" target={'_blank'}><span><strong>Online shop example</strong></span></a>
                        </p>
                        <p><strong>KEY TECHNOLOGIES: </strong> Python, Django</p>

                    </div>
                </div>

                <div className="job-wrapper ">
                    <div>
                        <h3>Mi Experience </h3>
                        <h4><span>2007 - 2013</span></h4>
                    </div>
                    <div className="job-description ">
                        <h3>Administración de sitios web, China </h3>
                        <span><FaList size={20} /></span>

                        <p>
                            • Mantenimiento, gestión de contenido y copias de seguridad de sitios web.<br />
                            • Diseño y desarrollo de nuevos sitios web.<br />
                            • Creé e implementé un nuevo Sistema de administración de contenido que incrementó significativamente el tráfico de sitios web.<br />
                            • Trabajé cerca con clientes para garantizar que sus requisitos se cumplieran
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skill
