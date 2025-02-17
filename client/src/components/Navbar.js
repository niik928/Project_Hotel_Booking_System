import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
  let user;

  try {
    const storedUser = localStorage.getItem("currentUser");
    user = storedUser ? JSON.parse(storedUser) : null;
  } catch (e) {
    console.error('Error parsing user data from localStorage', e);
    user = null;
  }
  function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = '/login';
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="#">
          GUEST-GURU
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" ><FontAwesomeIcon icon={faBars} /></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-5">
          {user ? (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon icon={faUser} /> {user.name}
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Bookings</a>
                  <a className="dropdown-item" href="#" onClick={logout}>Logout</a>
                </div>
              </li>
            ) : (
              <>
                <li class="nav-item active">
                  <a class="nav-link" href="/register">
                    Register
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/login">
                    Login
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;