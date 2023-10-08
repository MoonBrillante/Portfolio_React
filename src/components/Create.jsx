import React, { useState } from 'react';
import axios from 'axios';
import './Create.css';

const url = "http://localhost:8083/api/v1/projects";

const Create = ({ closeForm }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [technology, setTechnology] = useState("");
  const [img, setImg] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImg(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !description || !technology || !img) {
      alert("Please fill in all fields");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("technology", technology);
    formData.append("img", img);

    try {
      await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Project uploaded successfully");
      setName(""); // Reset the state variables
      setDescription("");
      setTechnology("");
      setImg(null);
    } catch (error) {
      console.error("Failed to upload project", error);
    }
  };

  const handleCancel = () => {
    setName(""); // Reset the state variables
    setDescription("");
    setTechnology("");
    setImg(null);
    closeForm();
  };

  return (
    <div>
      <div className="create-container">
        <h1>Create a New Project</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <label>Project Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Project name"
            />
          </div>
          <div className="input-box">
            <label>Description</label>
            <textarea
              cols="20"
              rows="2"
              placeholder="Your Message"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="input-box">
            <label>Technology</label>
            <textarea
              cols="20"
              rows="2"
              placeholder="Technology"
              value={technology}
              onChange={(e) => setTechnology(e.target.value)}
            ></textarea>
          </div>
          <div className="input-box">
            <label>Img</label>
            <input type="file" accept="image/*" onChange={handleFileChange} />
          </div>
          <div className="button-container">
          <button type="submit" className='create btn'>Create</button>
          <button onClick={closeForm} className="close-button btn">
          Close
        </button>
      </div>
        </form>

       
      </div>
    </div>
  );
};

export default Create;









