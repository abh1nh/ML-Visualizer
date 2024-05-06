import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/linreg" className="nav-link">Linear Regression</Link>
        </li>
        <li className="nav-item">
          <Link to="/nn" className="nav-link">Nearest Neighbour</Link>
        </li>
        <li className="nav-item">
          <Link to="/svm" className="nav-link">Support Vector Machines</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;