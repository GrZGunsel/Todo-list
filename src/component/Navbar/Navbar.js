import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-link">
        <Link to="/" className="link">
          <h1> Home</h1>
        </Link>
        <Link to="/todo" className="link">
          <h1> Todo-list</h1>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
