import React from "react";

function Creer() {
  return (
    <div className="container mt-4">
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputEmail4">RIB</label>
            <input
              type="number"
              className="form-control"
              id="inputEmail4"
              placeholder="RIB"
            />
          </div>
          <div className="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              placeholder="Password"
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
          />
        </div>
        <div className="form-group">
          <label for="inputAddress">Addresse </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Rue,Apartment,Etage"
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="Numtel">Numéro de téléphone </label>
            <input type="number" className="form-control" id="Numtel" />
          </div>
          <div className="form-group col-md-4">
            <label for="inputState">State</label>
            <select id="inputState" className="form-control">
              <option selected>Choose...</option>
              <option>Célibataire</option>
              <option>Marié</option>
            </select>
          </div>
          <div className="form-group col-md-2">
            <label for="inputZip">Zip</label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <button type="submit" className="btn btn-primary ">
            Ajouter un nouveau compte
          </button>
        </div>
      </form>
    </div>
  );
}

export default Creer;
