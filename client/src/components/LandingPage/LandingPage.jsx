import React from "react";
import { Link } from "react-router-dom";
import './LandingPage.css'

export default function LandingPage () {
  return (
    <Link to="/Home">
      <div className='landingPage'>
        <title>Wiki Dogs</title>
        <h2>All the information About the dog you are looking for:</h2>
        {/* logica para mostrar un par de perros con su info */}
        <p>Click to see more!</p>
      </div>
    </Link>
  );
}
