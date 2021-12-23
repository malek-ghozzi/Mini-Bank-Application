import React, { useState } from "react";
import axios from "../../../Utils/axios"

function Creer() {
  const [nom, setNom] = useState();
  const [prenom, setPrenom] = useState();
  const [rib, setRib] = useState();
  const [password, setPassword] = useState();
  const [profession, setProfession] = useState();
  const [addresse, setAddresse] = useState();
  const [tel, setTel] = useState();
  const [status, setStatus] = useState();
  const [zip, setZip] = useState();

  const data = {
    nom,
    prenom,
    rib,
    password,
    profession,
    addresse,
    tel,
    status,
    zip,
    role : 1 ,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/auth/register", data);
  };

  return (
    <div className="container mt-4">
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputEmail4">Nom</label>
            <input
              type="text"
              className="form-control"
              id="inputEmail4"
              placeholder="Nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <label for="inputPassword4">Prénom</label>
            <input
              type="text"
              className="form-control"
              id="inputPassword4"
              placeholder="Prénom"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputEmail4">RIB</label>
            <input
              type="number"
              className="form-control"
              id="inputEmail4"
              placeholder="RIB"
              value={rib}
              onChange={(e) => setRib(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <label for="inputAddress">Profession</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Profession"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="inputAddress">Addresse </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Rue,Apartment,Etage"
            value={addresse}
            onChange={(e) => setAddresse(e.target.value)}
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="Numtel">Numéro de téléphone </label>
            <input
              type="number"
              className="form-control"
              id="Numtel"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />
          </div>
          <div className="form-group col-md-4">
            <label for="inputState">Status</label>
            <select
              id="inputState"
              className="form-control"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option selected>Choose...</option>
              <option>Célibataire</option>
              <option>Marié</option>
            </select>
          </div>
          <div className="form-group col-md-2">
            <label for="inputZip">Zip</label>
            <input
              type="text"
              className="form-control"
              id="inputZip"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <button type="submit" className="btn btn-primary " onClick={handleSubmit}>
            Ajouter un nouveau compte
          </button>
        </div>
      </form>
    </div>
  );
}

export default Creer;
