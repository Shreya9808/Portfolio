import React from "react";
import { Link } from "react-router";

import '../styles/nav.css';


export default function Navbar() {
  return (<div>



  <nav className="navbar navbar-expand-lg custom-navbar">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" >Portfolio</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/exp">Experience</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/projec">Projects</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>







  </div>
   
  );
}
