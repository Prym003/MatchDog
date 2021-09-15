import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import "./DogDetails.css";
const { getDogById, cleanDogId } = require("../../actions");

export default function DogDetail() {
  const Dog = useSelector((state) => state.dogById);
  const dispatch = useDispatch();
  let { id } = useParams();
  useEffect(() => {
    dispatch(getDogById(id));
    return dispatch(cleanDogId());
  }, [dispatch, id]);

  return (
    <>
      {typeof Dog[0] === "object" ? (
        <div className="container">
          <div className="cardContainer">
            <div className="header">
              <img
                src={Dog[0].image}
                alt="Img not found"
                width="250px"
                height="250px"
              />
              <h3>{Dog[0].name}</h3>
            </div>
            <div className="description">
              <ul>
                <li>
                  <h4>Height: {Dog[0].height} cm</h4>
                </li>
                <li>
                  <h4>Weight: {Dog[0].weight} kg</h4>
                </li>
                <li>
                  <h4>Life Span: {Dog[0].life_span}</h4>
                </li>
                <li>
                  <h4>Temperaments:</h4>
                  <h4>{Dog[0].temperaments?.join(", ")}</h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="loading">
          <h2>Searching...</h2>
        </div>
      )}
    </>
  );
}
