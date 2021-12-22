import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
 let navigate = useNavigate()
  return (
    <div className="col h-100 bg-dark d-flex justify-content-center">
      <form className="bg-light col-sm-6 h-75 mt-5 p-5 rounded">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="d-flex justify-content-center mt-4 ">
          <button onClick={() => navigate("crediter")} type="submit" className="btn btn-outline-dark w-100">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
