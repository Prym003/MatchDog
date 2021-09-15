import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({ id, url, name, weight, temperaments }) {
  return (
    <Link to={`/DogDetails/${id}`}>
      <div className="card">
        <div className="image">
          <img src={url} alt="Img not found" height='300px' width='300px'/>
        </div>
        <div className="card_content">
          <h3 className="title">{name}</h3>
          <ul className="card_caract">
            <li>
              <h4>{weight} kg</h4>
            </li>
            <li>
              <h4>{temperaments?.join(", ")}</h4>
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
}
