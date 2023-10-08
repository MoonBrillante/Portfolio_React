import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdOutlineDeleteForever } from "react-icons/md";
import { AiTwotoneEdit } from "react-icons/ai";
import Create from "./Create";
import EditUpdate from "./EditUpdate";
import "./Project.css";

const url = "http://localhost:8083/api/v1/projects";

const Project = () => {
    const [projects, setProjects] = useState([]);
    const [createFormVisible, setCreateFormVisible] = useState(false);
    const [editingProjectId, setEditingProjectId] = useState(null);

    useEffect(() => {
        async function fetchProjects() {
            try {
                const response = await axios.get(url);
                setProjects(response.data);
                } catch (error) {
                console.error("get project data fail", error);
            }
        }
        fetchProjects();
    }, []);

    const addNewProject = (newProject) => {
        setProjects([...projects, newProject]);
    };

    const toggleCreateForm = () => {
        setCreateFormVisible(prevState => !prevState);
    };
    
    const handleEdit = (projectId) => {
        setEditingProjectId(projectId);
    };

    const handleUpdate = (updatedProject) => {
        setProjects(prevProjects => 
            prevProjects.map(project => 
                project.id === updatedProject.id ? updatedProject : project)
        );
        setEditingProjectId(null);
    };
    
    const handleDelete = async (projectId) => {
        try {
            await axios.delete(`${url}/${projectId}`);
            setProjects(prevProjects => prevProjects.filter(project => project.id !== projectId));
            console.log("Project deleted:", projectId);
        } catch (error) {
            console.log("Project deletion failed:", error);
        }
    };

    return (
        <section className="project" id="project">
            <h2 className="heading">Ultimo <span>Proyecto</span>
            <button className ="btn" onClick={toggleCreateForm}>Create</button></h2>
            {createFormVisible && !editingProjectId && (
                <Create
                    addNewProject={addNewProject}
                    closeForm={toggleCreateForm}
                />
            )}
            <div className="project-container">
                {projects.map((project) => (
                    <div key={project.id} className="project-box">
                        <img src={project.img} alt={project.name} />
                        <div className="project-layer">
                            <h4>{project.name}</h4>
                            <p className="project-link">{project.description}</p>
                            <p className="project-link">{project.technology}</p>
                            <div className="project-demo">
                                <a href="https://github.com/MoonBrillante/" target={"_blank"} rel="noopener noreferrer">Code</a>
                            </div>
                        </div>
                        <div className="project-crud">
                    
                            {editingProjectId === project.id && (
        <EditUpdate
            project={project}
            onClose={() => setEditingProjectId(null)}
            handleUpdate={handleUpdate}
        />
    )}
                            <AiTwotoneEdit size={30} onClick={() => handleEdit(project.id)} />
                            <MdOutlineDeleteForever size={30} onClick={() => handleDelete(project.id)} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Project;
