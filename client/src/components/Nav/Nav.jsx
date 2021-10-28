import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <header>
      <Link to="/">
        <h3>MatchDog</h3>
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
