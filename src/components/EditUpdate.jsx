import React, { useState, useEffect } from "react";
import "./EditUpdate.css";
import axios from "axios";

const url = "http://localhost:8083/api/v1/projects";

const EditUpdate = ({ project, onClose, handleUpdate }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [technology, setTechnology] = useState("");
    const [img, setImgFile] = useState(null);
    
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    useEffect(() => {
        if (project) {
            setName(project.name);
            setDescription(project.description);
            setTechnology(project.technology);
        }
    }, [project]);

    const handleImgChange = (e) => {
        setImgFile(e.target.files[0]);
    };

    const resetForm = () => {
        if (project) {
            setName(project.name);
            setDescription(project.description);
            setTechnology(project.technology);
            setImgFile(null);  
        }
    };


    const update = async (e) => {
        e.preventDefault();
    
        if (!project || !project.id) {
            console.error("Project or project ID is missing");
            return;
        }
    
        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("technology", technology);
        if (img) {
            formData.append("img", img);
        }
    
        try {
            const response = await axios.put(`${url}/${project.id}`, formData);
            if (response.data.success) {
                const updatedProject = response.data.project; 
                handleUpdate(updatedProject);
                setShowSuccessMessage(true);
                resetForm();
            } else {
                console.error("Failed to update project on the server.");
            }
        } catch (error) {
            console.error("Failed to send update request:", error);
        }
    
        if (onClose) onClose();
    };
    
    return (
        <div className="popup-container">
            <div className="popup-content">
                <h1>Edit Project</h1>
                <form onSubmit={update}>
                <div className="input-box">
                        <label className="update-label">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="input-box">
                        <label className="update-label">Description:</label>
                        <textarea
                            id="description"
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="input-box">
                        <label className="update-label">Technology:</label>
                        <textarea
                            id="technology"
                            name="technology"
                            value={technology}
                            onChange={(e) => setTechnology(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="update-label">Image Upload:</label>
                        <input
                            type="file"
                            id="img"
                            name="img"
                            accept="image/*"
                            onChange={handleImgChange}
                        />
                    </div>
                    <button type="submit" className="update-project btn">Update</button>
                    <button
                        type="button"
                        className="update-project btn"
                        onClick={() => {
                            if (onClose) onClose();
                        }}
                    >
                        Close
                    </button>

                </form>
            </div>
        </div>
    );
};

export default EditUpdate;