import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../Utils/axios"

function Login() {
  let navigate = useNavigate();
  const [rib, setRib] = useState();
  const [password, setPassword] = useState();
  const data = { rib, password };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/auth/login", data).then(() => {
      navigate("crediter");
    });
  };

  return (
    <div className="col h-100 bg-dark d-flex justify-content-center">
      <form className="bg-light col-sm-6 h-75 mt-5 p-5 rounded">
        <div className="form-group">
          <label for="exampleInputRib">RIB</label>
          <input
            type="number"
            className="form-control"
            id="exampleInputRib"
            aria-describedby="RIBHelp"
            placeholder="RIB"
            value={rib}
            onChange={(e) => setRib(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-center mt-4 ">
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-outline-dark w-100"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
