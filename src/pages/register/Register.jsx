import { useState } from "react";
import "./Register.scss";
import axios from "axios";

const Register = ({ categorys }) => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [cor, setCor] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://appflix.onrender.com/api/category/addcategory",
        {
          title,
          link,
          cor,
          password,
        }
      );
      alert("Categoría creada correctamente!");
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://appflix.onrender.com/api/category/${id}`);
      alert("Categoría eliminada correctamente!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register">
      <h1 className="title">Nueva Categoria</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="inputs">
          <input
            className="input"
            type="text"
            placeholder="Nombre de la Categoria"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="input"
            type="text"
            placeholder="Link Categoria"
            onChange={(e) => setLink(e.target.value)}
          />
          <label htmlFor="color" className="label">
            <input
              aria-invalid="false"
              id="color"
              autoComplete="on"
              type="color"
              className="input_color"
              placeholder="Color"
              onChange={(e) => setCor(e.target.value)}
            />
            <span className="spanColor"> color</span>
          </label>
          <input
            className="input"
            type="text"
            placeholder="Código de seguridad"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="btns">
          <div className="left">
            <div className="btn1">
              <button className="save" type="submit">
                Crear
              </button>
            </div>
          </div>
        </div>
      </form>

      <table className="table">
        <tr className="table_head">
          <th>Categorías</th>
        </tr>

        {categorys.map((cat) => (
          <>
            <tr className="containerTable">
              <td className="categoryRow">
                <p style={{ color: cat.cor }}>{cat.title}</p>
                <span
                  className="delete"
                  style={{ color: cat.cor }}
                  onClick={() => handleDelete(cat._id)}
                >
                  X
                </span>
              </td>
            </tr>
          </>
        ))}
      </table>
    </div>
  );
};

export default Register;
