import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {logout} from "../../helpers/auth"


function Navbaradmin() {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    logout(() => {
      navigate("/");
    });
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className=" d-flex justify-content-center align-items-center">
          <h5 className="mb-0 ">BANK</h5>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <Link to="/creer" className="nav-link">
                Créer un compte
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/comptes" className="nav-link">
                Affichier les comptes
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/transactions" className="nav-link">
                Affichier les transactions
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit" onClick={handleLogout}
            >
              déconnexion
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbaradmin;
