import React from 'react'
import { FaList } from 'react-icons/fa'
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
                        <span><FaList size={20} /></span>
                        <p>
                            Este proyecto es un portafolio en línea, que te permitirá
                            conocer mi trabajo como desarrolladora web Full Stack.Además 
                            de esto, es una de las mejores formas para expresar tu personalidad, experiencia y capacidades.</p>
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
                        <h3>Web Full Stack | <span>Factoría F5</span></h3>
                        <h4><span>Mayo 2023 - Oct 2023</span></h4>
                    </div>
                    <div className="job-description ">
                        <h3>Lo Tienes Crudos</h3>
                        <span><FaList size={20} /></span>
                        <p>Desarrollar una aplicación<span>"CRUD"</span>  Web en Java que permita pedir
                        cita a los desarrolladores y equipos para solucionar problemas técnicos con la 
                        ayuda de desarrolladores de una empresa que se dedica a apagar incendios de código.</p>
                        <p><strong><span>KEY TECHNOLOGIES:</span></strong> React, Spring Boot</p>
                    </div>
                </div>

                <div className="job-wrapper ">
                    <div>
                        <h3>Front End | <span>Factoría F5</span></h3>
                        <h4><span>Mayo 2023 - Oct 2023</span></h4>
                    </div>
                    <div className="job-description ">
                        <h3>Consumo Api en React</h3>
                        <span><FaList size={20} /></span>
                        <p>Use React develop freont end, show PokéAPI Cards are dynamically generated using 
                            data fetched from the PoKéAPI Responsive página web, el ratón mueve las tarjetas 
                            mostrar efecto de animación, haga clic en la tarjeta para que pop-up el mensaje 
                            y nav tiene función de búsqueda.</p>
                            <p><strong><span>KEY TECHNOLOGIES:</span></strong> React, PokéAPI</p>
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
