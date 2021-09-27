import React from "react";
import "./CarruselCard.css";

export default function CarruselCard({ url, name }) {
  return (
    <div className="carruselCard">
      <div className="imageC">
        <img src={url} alt="Img not found" height="300px" width="300px" />
      </div>
      <h3 className="title">{name}</h3>
    </div>
  );
}
