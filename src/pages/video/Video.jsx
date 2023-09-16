// import React from "react";
import { useState } from "react";
import "./Video.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const Video = ({ categorys }) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [img, setImg] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const filtered = categorys.find((c) => {
        return c.title === category;
      });

      if (!filtered) {
        alert("¡Elija una categoría existente o registre una diferente!");
      } else {
        const id = filtered._id;
        await axios.post(`https://appflix.onrender.com/api/video/${id}`, {
          title,
          url,
          img,
          category,
        });
        alert("Video agregado correctamente!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="video">
      <h1 className="title_video">Nuevo Video</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="inputs">
          <input
            type="text"
            placeholder="Titulo"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Link del video"
            name="url"
            onChange={(e) => setUrl(e.target.value)}
          />
          <input
            type="text"
            placeholder="Url imagen del video"
            name="img"
            onChange={(e) => setImg(e.target.value)}
          />
          <input
            type="text"
            placeholder="Escoja una categoría"
            name="category"
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="btns">
          <div className="left">
            <div className="btn1">
              <button className="save" type="submit">
                Guardar
              </button>
            </div>
          </div>
          <div className="right">
            <Link to="/register">
              <button>Crear Categoría</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Video;
