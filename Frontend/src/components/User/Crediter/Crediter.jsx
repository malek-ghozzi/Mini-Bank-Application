import React from "react";

function Crediter() {
  const today = new Date().toISOString().slice(0, 10);
  return (
    <div className="container mt-5">
      <div className="card ">
        <div className="card-body">
          <h5 className="card-title">Welcome Mr X</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Today's date: {today}
          </h6>
          <p className="card-text">How much money you want to add</p>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">$</span>
            </div>
            <input
              type="text"
              class="form-control"
              aria-label="Amount (to the nearest dollar)"
            />
            <div class="input-group-append">
              <span class="input-group-text">.000</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 d-flex justify-content-end">
        <button className="btn btn-primary w-25 ">
          <i className="fa fa-plus mr-3" aria-hidden="true"></i>
          Crediter
        </button>
      </div>
    </div>
  );
}

export default Crediter;
