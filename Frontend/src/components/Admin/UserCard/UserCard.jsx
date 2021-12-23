import React from "react";

function UserCard() {
  return (
    <div className="mt-4 w-75 ">
      <div className="card ">
        <div className="card-body">
          <h5 className="card-title">NometPrénom</h5>
          <h6 className="card-subtitle mb-2 text-muted">RIB du Client</h6>
          <p className="card-text">Compte Créer depuis : ../../....</p>
          <div className="d-flex justify-content-end">
            <button className="btn btn-danger">Supprimer</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
