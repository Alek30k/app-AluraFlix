import { useState } from "react";
import "./Register.scss";
import axios from "axios";

const Register = ({ categorys }) => {
  const [title, setTitle] = useState("");
  const [urlCategory, setUrlCategoty] = useState("");
  const [cor, setCor] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/api/category/addcategory", {
        title,
        urlCategory,
        cor,
        password,
      });
      alert("Categoría creada correctamente!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register">
      <h1>Nuevo Categoria</h1>
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
            onChange={(e) => setUrlCategoty(e.target.value)}
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
              <button className="save">Guardar</button>
            </div>
            <div className="btn2">
              <button className="delete" type="submit">
                Eliminar
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
              <td>
                <p style={{ color: cat.cor }}>{cat.title}</p>
              </td>
            </tr>
          </>
        ))}
      </table>
    </div>
  );
};

export default Register;
