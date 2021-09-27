import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <header>
      <Link to="/">
        <img src="https://i.ibb.co/608dCH2/Logo.png" alt="LOGO" />
      </Link>
      <ul className="nav">
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/CreateDog">Create New Breed</Link>
        </li>
      </ul>
    </header>
  );
}
