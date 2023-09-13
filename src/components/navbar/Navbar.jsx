import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <Link to="/">
            <img src="/src/assets/img/LogoMain.png" alt="Logo" />
          </Link>
        </div>
        <div className="right">
          <Link to="/addvideo">
            <button>Nuevo Video</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
