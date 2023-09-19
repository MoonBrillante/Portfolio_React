import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdOutlineCreateNewFolder, MdOutlineDeleteForever } from "react-icons/md";
import { AiTwotoneEdit } from "react-icons/ai";
import Create from "./Create";
import Update from "./EditUpdate";
import "./Project.css";

const url = "http://localhost:8083/api/v1/projects";
const Project = () => {
    const [projects, setProjects] = useState([]);
    const [createFormVisible, setCreateFormVisible] = useState([]);
    const [editingProjectIndex, setEditingProjectIndex] = useState(null);

    useEffect(() => {
        async function fetchProjects() {
            try {
                const response = await axios.get(url);
                setProjects(response.data);
                setCreateFormVisible(Array(response.data.length).fill(false));
            } catch (error) {
                console.error("get project data fail", error);
            }
        }
        fetchProjects();
    }, []);

    const addNewProject = (newProject) => {
        setProjects([...projects, newProject]);
    };

    const toggleCreateForm = (index) => {
        // 使用索引来控制每个项目的状态
        const newCreateFormVisible = [...createFormVisible];
        newCreateFormVisible[index] = !newCreateFormVisible[index];
        setCreateFormVisible(newCreateFormVisible);
    };

    const handleUpdate = async (updatedProject) => {
        try {
            const response = await axios.put(`${url}/${updatedProject.id}`, updatedProject);
            if (response.status === 200) {
                console.log("Project updated successfully:", updatedProject);
                closeEditForm();
            } else {
                console.log("Failed to update project.");
            }
        } catch (error) {
            console.log("Error updating project:", error);
        }
    };

    const handleEdit = (index) => {
        setEditingProjectIndex(index);
    };

    const handleDelete = async (projectId) => {
        console.log("Delete button clicked for project ID:", projectId);
        try {
            await axios.delete(`${url}/${projectId}`);
            // 更新项目列表，排除被删除的项目
            setProjects((prevProjects) =>
                prevProjects.filter((project) => project.id !== projectId)
            );
            console.log("Project deleted:", projectId);
        } catch (error) {
            console.log("Project deletion failed:", error);
        }
    };


    const closeEditForm = () => {
        setEditingProjectIndex(null);
    };
    return (

        <section className="project" id="project">
            <h2 className="heading">Ultimo <span>Proyecto</span></h2>
            <div className="project-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-box">
                        <img src={project.img} alt={project.name} />
                        <div className="project-layer">
                            <h4>{project.name}</h4>
                            <p className="project-link">{project.description}</p>
                            <p className="project-link">{project.technology}</p>
                            <div className="project-demo"><a href="#" >Demo</a>
                                <a href="#">Code</a></div>
                        </div>
                        <div className="project-crud">
                            {createFormVisible[index] && (
                                <Create
                                    addNewProject={addNewProject}
                                    closeForm={() => toggleCreateForm(index)}
                                />
                            )}
                            <MdOutlineCreateNewFolder size={30} onClick={() => toggleCreateForm(index)} />
                            {editingProjectIndex === index && (
                                <Update
                                    project={projects[editingProjectIndex]}
                                    onClose={closeEditForm}  // Pass onClose prop
                                    handleUpdate={handleUpdate}
                                    closeEditForm={closeEditForm}
                                />
                            )}


                            <AiTwotoneEdit size={30} onClick={() => handleEdit(index)} />
                            <MdOutlineDeleteForever size={30} onClick={() => handleDelete(project.id)} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Project;

