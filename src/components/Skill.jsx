import React from 'react'
import { FaCode, FaPaintBrush, FaChartBar } from 'react-icons/fa'
import { LiaLaptopCodeSolid } from 'react-icons/lia'
import { HiOutlineCode } from 'react-icons/hi'
import { FiTool } from 'react-icons/fi'
import {FaList} from 'react-icons/fa'
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
                        <h3>Portafolio</h3>
                        <span><FaList size={20}/></span> 
                        <p>
                        Este proyecto es un portafolio en línea que te permitirá 
                        conocer mi trabajo como desarrolladora web Full Stack.</p>
                        <h4><span>Requerimientos Técnicos</span></h4>
                        <p>Metodología de Gestión:</p>
                        <p>Usaré la metodología de trabajo SCRUM.</p>
                        <h4><span>Tecnologías Utilizadas:</span></h4>
                        <p>Frontend: Desarrollado en React</p>
                        <p>Backend: Desarrollado en Spring Boot</p>
                        <h4><span>Operaciones CRUD:</span></h4>
                        <p>El proyecto debe implementar un CRUD (Create, Read, Update, Delete) que permita subir proyectos a la base de datos.
                        </p>
                    </div>
                </div>

                <div className="job-wrapper ">
                    <div>
                    <h3>Front End con API | <span>Factoría F5</span></h3>
                        <h4><span>Mayo 2023 - Oct 2023</span></h4>
                    </div>
                    <div className="job-description ">
                    <h3>Portafolio</h3>
                    <span><FaList size={20}/></span> 
                        <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem
                            Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un
                            impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de
                            textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo
                            sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos</p>
                        <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem
                            Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un
                            impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de
                            textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo
                            sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos</p>
                        <p><strong>KEY TECHNOLOGIES:</strong> JavaScript, React, Redux</p>
                    </div>
                </div>

                <div className="job-wrapper ">
                    <div>
                    <h3>Front End | <span>Factoría F5</span></h3>
                        <h4><span>Mayo 2023 - Oct 2023</span></h4>
                    </div>
                    <div className="job-description ">
                    <h3>Portafolio</h3>
                    <span><FaList size={20}/></span>
                        <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem
                            Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un
                            impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de
                            textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo
                            sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos</p>
                        <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem
                            Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un
                            impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de
                            textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo
                            sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos</p>
                        <p><strong>KEY TECHNOLOGIES:</strong> JavaScript, React, Redux</p>
                    </div>
                </div>
                
                <div className="job-wrapper ">
                    <div>
                    <h3>Mi Proyecto | <span>Factoría F5</span></h3>
                        <h4><span>Mayo 2023 - Oct 2023</span></h4>
                    </div>
                    <div className="job-description ">
                    <h3>Portafolio</h3>
                    <span><FaList size={20}/></span>
                        <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem
                            Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un
                            impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de
                            textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo
                            sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos</p>
                        <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem
                            Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un
                            impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de
                            textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo
                            sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos</p>
                        <p><strong>KEY TECHNOLOGIES:</strong> JavaScript, React, Redux</p>
                    </div>
                </div>
                
                <div className="job-wrapper ">
                    <div>
                    <h3>Mi Proyecto </h3>
                        <h4><span>2018 - 2019</span></h4>
                    </div>
                    <div className="job-description ">
                    <h3>Mi Blog</h3>
                    <span><FaList size={20}/></span>
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
                    <span><FaList size={20}/></span>
                    
<p>
• Mantenimiento, gestión de contenido y copias de seguridad de sitios web.<br/>
• Diseño y desarrollo de nuevos sitios web.<br/>
• Creé e implementé un nuevo Sistema de administración de contenido que incrementó significativamente el tráfico de sitios web.<br/>
• Trabajé cerca con clientes para garantizar que sus requisitos se cumplieran
                         </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skill
