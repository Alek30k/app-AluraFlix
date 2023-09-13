// import React from "react";
import { useEffect, useState } from "react";
import "./Video.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const Video = ({ category, setCategory }) => {
  console.log(category);
  const [addVideo, setAddVideo] = useState({
    title: "",
    url: "",
    img: "",
    category: "",
    password: "",
  });

  // useEffect(()=>{
  //   const fetchVideos = async () => {
  //     try {
  //       const res = await axios.post(
  //         `http://localhost:8800/api/category/${category}`
  //       );

  //       setAddVideo(res.data);

  //       // console.log(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchVideos();
  // },[])

  // const categoriaFind = category.find((categoria) => {
  //   category.title === addVideo.category;
  // });

  // console.log(categoriaFind);

  return (
    <div className="video">
      <h1 className="title_video">Nuevo Video</h1>
      <form className="form">
        <div className="inputs">
          <input type="text" placeholder="Titulo" name="title" />
          <input type="text" placeholder="Link del video" name="url" />
          <input type="text" placeholder="Link imagen del video" name="img" />
          <input
            type="text"
            placeholder="Escoja una categoría"
            name="category"
            // onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Código de seguridad"
            name="password"
          />
        </div>
        <div className="btns">
          <div className="left">
            <div className="btn1">
              <button className="save">Guardar</button>
            </div>
            <div className="btn2">
              <button className="delete">Eliminar</button>
            </div>
          </div>
          <div className="right">
            <Link to="/register">
              <button>Nueva Categoría</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Video;
