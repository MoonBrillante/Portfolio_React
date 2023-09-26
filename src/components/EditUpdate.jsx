import React, { useState, useEffect } from "react";
import "./EditUpdate.css";

const EditUpdate = ({ project, onClose, handleUpdate }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [technology, setTechnology] = useState("");
    const [img, setImgFile] = useState(null);

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

    const update = async (e) => {
        e.preventDefault();
        if (!project || !project.id) {
            console.error("Project or project ID is missing");
            return;
        }

        const updatedProject = {
            id: project.id,
            name,
            description,
            technology,
            img
        };

        handleUpdate(updatedProject);
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
                        Cancel
                    </button>
                </form>
                <button
                    onClick={() => {
                        if (onClose) onClose();
                    }}
                    className="update-button btn"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default EditUpdate;
