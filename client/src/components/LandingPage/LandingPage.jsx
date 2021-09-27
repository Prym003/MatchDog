import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./LandingPage.css";
import CarruselCard from "../CarruselCard/CarruselCard";

const shuffleArray = (Arr) => {
  let array = Arr;
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

export default function LandingPage() {
  const allDogs = useSelector((state) => state.orderedAndFilteredDogs);

  const [randomDogs, setRandomDogs] = useState(
    setInterval(() => {
      return setRandomDogs(shuffleArray(allDogs));
    }, 6000)
  );

  let dogsCarrusel = "Loading...";
  if (typeof randomDogs === "number") {
    dogsCarrusel = shuffleArray(allDogs).slice(0, 3);
  } else if (typeof randomDogs === "object") {
    dogsCarrusel = randomDogs.slice(0, 3);
  } else {
    dogsCarrusel = "Loading...";
  }

  //Carrusel
  const check = typeof dogsCarrusel === "object";

  return (
    <Link to="/Home">
      <div className="landingPage">
        <h2>All the information About the dog you are looking for:</h2>
        {check ? (
          <div className="carruselConteainer">
            {dogsCarrusel.map((dog) => {
              return (
                <div key={dog.id}>
                  <CarruselCard url={dog.image} name={dog.name} />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="carruselLoading">
            <h2>loading...</h2>
          </div>
        )}
        <div className="msn">
          <p>Click to see more!</p>
        </div>
      </div>
    </Link>
  );
}
