/*import React, { useState, useEffect } from "react";
import axios from "axios";
import "./EditUpdate.css"; // Import the CSS for styling

const url = "http://localhost:8083/api/v1/proyectos";
const EditUpdate = ({ project, onClose }) => {
    const [name, setName] = useState("");
    const [technology, setTechnology] = useState("");
    const [description, setDescription] = useState("");
    const [imageFile, setImageFile] = useState(null);

    useEffect(() => {
        if (project) {
            setName(project.name);
            setTechnology(project.technology);
            setDescription(project.description);
        }
    }, [project]);

    const handleImageChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    const update = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("name", name);
        data.append("technology", technology);
        data.append("description", description);
        if (imageFile) {
            data.append("img", imageFile);
        }
        try {
            await axios.put(`${url}/${project.id}`, data)
                .then(response => {
                    console.log('Respuesta del servidor:', response.data);
                    if (onClose) onClose();
                })
                .catch(error => {
                    console.error('Error al actualizar el proyecto:', error);
                });
        } catch (err) {
            console.error("Error al enviar el formulario:", err);
        }
    };
    
    //const handleEditClose = () => {
      //setIsEditOpen(false);
    //};
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
              onChange={handleImageChange}
            />
          </div>
          
          <button type="submit" 
            className="update-project btn">
            Update
          </button>

          <button
            type="button"
            className="update-project btn"
            onClick={() => {
              onClose();
            }}
          >
            Cancel
          </button>
     
        </form>
        <button onClick={onClose} className="update-button btn">
          Close
        </button>
      </div>
    </div>
  );
};

export default EditUpdate;
*/

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./EditUpdate.css";
const url = "http://localhost:8083/api/v1/proyectos";
const EditUpdate = ({ project, onClose }) => {
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
        const data = new FormData();
        data.append("name", name);
        data.append("description", description);
        data.append("technology", technology);
        
        if (img) {
            data.append("img", img);
        }
        const config = {
            headers: {
                // Si tu API espera algún header específico, agrégalo aquí.
                // 'Authorization': `Bearer ${token}`,
            }
        };
        try {
            await axios.put(`${url}/${project.id}`, data, config)
                .then(response => {
                    console.log('Respuesta del servidor:', response.data);
                    if (onClose) onClose();
                })
                .catch(error => {
                    console.error('Error al actualizar el proyecto:', error);
                });
        } catch (err) {
            console.error("Error al enviar el formulario:", err);
        }
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
                            accept="img/*"
                            //value={img}
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
                <button onClick={() => {
                    if (onClose) onClose();
                }} className="update-button btn">
                    Close
                </button>
            </div>
        </div>
    );
};
export default EditUpdate;