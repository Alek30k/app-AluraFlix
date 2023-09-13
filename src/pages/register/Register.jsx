import React from "react";
import "./Register.scss";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <h1>Nuevo Categoria</h1>
      <div className="form">
        <div className="inputs">
          <input className="input" type="text" placeholder="Titulo" />
          <input className="input" type="text" placeholder="Link del video" />
          <input
            aria-invalid="false"
            id=":r7:"
            type="color"
            className="input_color"
            placeholder="Color"
          />

          <input
            className="input"
            type="text"
            placeholder="Código de seguridad"
          />
        </div>
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
      </div>

      <table className="table">
        <tr className="table_head">
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Editar</th>
          <th>Remover</th>
        </tr>
        <tr>
          <td>Front End</td>
          <td>Descripción del frond</td>
          <td>
            <a href="#">Editar</a>
          </td>
          <th>
            <a href="#">Remover</a>
          </th>
        </tr>
        <tr>
          <td>Back End</td>
          <td>Descripción del back end</td>
          <td>Female</td>
        </tr>
        <tr>
          <td>Innovación y Gestión</td>
          <td>Descripción de innovación </td>
          <td>Male</td>
        </tr>
      </table>
    </div>
  );
};

export default Register;
