import "../styles/navbarStyle.css";
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../auth/auth_helper";
import { data } from "../util";

const Navbar = (props) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ width: "100%" }}>
      <Link className="navbar-brand" to="/">
        <div className="logoTextStyle">Referoute</div>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/myprofile" className="nav-link">
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/signin"
              className="nav-link"
              onClick={() => {
                auth.signOut();
                console.log(data);
              }}>
              Sign Out
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
