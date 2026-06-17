import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  let user = null;

  try {
    user = JSON.parse(localStorage.getItem("currentUser"));
  } catch (e) {
    user = null;
  }
const navigate = useNavigate();
function logout() {
  localStorage.removeItem("currentUser");
  navigate("/login");
}

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <a className="navbar-brand" href="/">
      GUEST GURU
    </a>

    <div className="ms-auto">
      {user ? (
        <>
          <span className="text-white me-3">
            Hi, {user.name}
          </span>

          <button
            className="btn btn-danger"
            onClick={logout}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <a href="/login" className="btn btn-primary me-2">
            Login
          </a>

          <a href="/register" className="btn btn-success">
            Register
          </a>
        </>
      )}
    </div>
  </div>
</nav>
  );
}

export default Navbar;