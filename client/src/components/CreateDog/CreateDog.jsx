import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CreateDog.css";
const { createDog } = require("../../actions/index");

const tempFiltersToApply = (allTempFilter) => {
  let filtersTrue = [];
  let allFilters = Object.keys(allTempFilter);
  let allValues = Object.values(allTempFilter);
  for (let i = 0; i < allFilters.length; i++) {
    if (allValues[i] === true) {
      filtersTrue.push(allFilters[i]);
    }
  }
  return filtersTrue;
};

// const isUrl = (s) => {
//   var regexp =
//     /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
//   return regexp.test(s);
// };

export default function CreateDog() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const temperaments = useSelector((state) => state.temperaments);
  const [dogTemps, setDogTemps] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleTempFilters = (e) => {
    let newTempFil = {
      ...dogTemps,
      [e.target.id]: e.target.checked,
    };
    setDogTemps(newTempFil);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      name,
      height_min,
      height_max,
      weight_min,
      weight_max,
      life_span,
      image,
    } = form;
    let tempToAdd = tempFiltersToApply(dogTemps);
    if (name.length < 5) {
      alert("Breed name too short");
    } else if (
      height_min > height_max ||
      height_min < 15 ||
      height_max < 20 ||
      height_max > 120
    ) {
      alert("Height not valid");
    } else if (
      weight_min > weight_max ||
      weight_min < 1 ||
      weight_max < 2 ||
      weight_max > 150
    ) {
      alert("Weight not valid");
    } else if (life_span < 1 || life_span > 30) {
      alert("Life span not valid");
    } /* else if (isUrl(image)) {
      alert("Url image not valid");
    }*/ else if (tempToAdd.length === 0) {
      alert("No temperament selected");
    } else {
      let height = height_min + " - " + height_max;
      let weight = weight_min + " - " + weight_max;
      let newDog = form;
      delete newDog.height_min;
      delete newDog.height_max;
      delete newDog.weight_min;
      delete newDog.weight_max;
      newDog = {
        ...newDog,
        height: height,
        weight: weight,
        temperaments: tempToAdd.map((el) => parseInt(el)),
      };
      setForm({
        name: "",
        height_min: 0,
        height_max: 0,
        weight_min: 0,
        weight_max: 0,
        life_span: 0,
        image: "",
      });
      alert("Dog Created!");
      dispatch(createDog(newDog));
    }
  };

  return (
    <div className="form_container">
      <div className="form_inputs">
        <form onSubmit={handleSubmit}>
          <button type="submit">Create!</button>
          <br />
          <label htmlFor="name">Name of Breed:</label>
          <input
            type="text"
            id="name"
            name="name"
            minlength="5"
            value={form.name}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="height-min">Height Min:</label>
          <input
            type="number"
            id="height-min"
            name="height_min"
            min="15"
            value={form.height_min}
            onChange={handleChange}
          />
          <label htmlFor="height-min">cm</label>
          <br />
          <label htmlFor="height-max">Height Max:</label>
          <input
            type="number"
            id="height-max"
            name="height_max"
            min="20"
            max="120"
            value={form.height_max}
            onChange={handleChange}
          />
          <label htmlFor="height-max">cm</label>
          <br />
          <label htmlFor="weight-min">Weight Min:</label>
          <input
            type="number"
            id="weight-min"
            min="1"
            max="70"
            name="weight_min"
            value={form.weight_min}
            onChange={handleChange}
          />
          <label htmlFor="weight-min">kg</label>
          <br />
          <label htmlFor="weight-max">Weight Max:</label>
          <input
            type="number"
            id="weight-max"
            min="2"
            max="150"
            name="weight_max"
            value={form.weight_max}
            onChange={handleChange}
          />
          <label htmlFor="weight-max">kg</label>
          <br />
          <label htmlFor="life-span">Life Span:</label>
          <input
            type="number"
            id="life-span"
            name="life_span"
            min="1"
            max="30"
            value={form.life_span}
            onChange={handleChange}
          />
          <label htmlFor="life-span">years</label>
          <br />
          <label htmlFor="image">URL Image:</label>
          <input
            type="string"
            id="image"
            name="image"
            value={form.image}
            onChange={handleChange}
          />
          <br />
          <br />
          <br />
          <label>Temperaments:</label>
          <div className="temperamentContainer">
            {temperaments.map((temp) => {
              return (
                <div key={temp.id}>
                  <label htmlFor={temp.id}>| </label>
                  <input
                    type="checkbox"
                    id={temp.id}
                    name={temp.name}
                    value={dogTemps[temp.id]}
                    onChange={handleTempFilters}
                  />
                  <label htmlFor={temp.id}>{temp.name} |</label>
                </div>
              );
            })}
          </div>
        </form>
      </div>
    </div>
  );
}
