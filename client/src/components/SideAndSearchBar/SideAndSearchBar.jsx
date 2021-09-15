import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SideAndSearchBar.css";
const {
  getAllDogs,
  getDogsByName,
  filterAndOrderDogs,
  pageController,
} = require("../../actions");

export default function SideAndSearchBar() {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments);

  //States
  const [name, setName] = useState("");
  const [tempFilters, setTempFilters] = useState({});
  const [apiDbFilter, setApiDbFilter] = useState({});
  const [orderBy, setOrderBy] = useState("A-Z");

  //Handlers
  const handleSearchByName = (e) => {
    dispatch(getDogsByName(name, tempFilters, apiDbFilter, orderBy));
    setName("");
    dispatch(pageController(1));
  };

  const handleReload = (e) => {
    setName("");
    setOrderBy("A-Z");
    dispatch(getAllDogs(tempFilters, apiDbFilter, "A-Z"));
    dispatch(pageController(1));
  };

  const handleTempFilters = (e) => {
    let newTempFil = {
      ...tempFilters,
      [e.target.name]: e.target.checked,
    };
    setTempFilters(newTempFil);
    dispatch(filterAndOrderDogs(newTempFil, apiDbFilter, orderBy));
    dispatch(pageController(1));
  };

  const handleDbApiFilter = (e) => {
    let newApiDbFilter = {
      ...apiDbFilter,
      [e.target.name]: e.target.checked,
    };
    setApiDbFilter(newApiDbFilter);
    dispatch(filterAndOrderDogs(tempFilters, newApiDbFilter, orderBy));
    dispatch(pageController(1));
  };

  const handleOrder = (e) => {
    setOrderBy(e.target.value);
    dispatch(filterAndOrderDogs(tempFilters, apiDbFilter, e.target.value));
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      {/* SideBar or FilterBar */}
      <div className="sideBar">
        <div className='title'>
          <h3>Filter By</h3>
        </div>
        {/* Existant or Created */}
        <div>
          <h4>Created/Existing</h4>
          <input
            type="checkbox"
            id={"api"}
            name={"api"}
            value={apiDbFilter.api}
            onChange={handleDbApiFilter}
          />
          <label htmlFor={"api"}>Existing</label>
          <br />
          <input
            type="checkbox"
            id="db"
            name="db"
            value={apiDbFilter.db}
            onChange={handleDbApiFilter}
          />
          <label htmlFor="db">Created Only</label>
        </div>
        {/* Temp Filter */}
          <h4>Temperaments:</h4>
        <div className="filters">
          {temperaments.map((temp) => {
            return (
              <div key={temp.id}>
                <input
                  type="checkbox"
                  id={temp.id}
                  name={temp.name}
                  value={tempFilters[temp.name]}
                  onChange={handleTempFilters}
                />
                <label htmlFor={temp.id}>{temp.name}</label>
              </div>
            );
          })}
        </div>
      </div>
      {/* Div for SearchBar  */}
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Breed Name..."
          value={name}
          onChange={handleName}
        />
        <button onClick={handleSearchByName}>Search!</button>
        <button onClick={handleReload}>Reload</button>
        <h5>Order By</h5>
        <select onChange={handleOrder} value={orderBy}>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          <option value="lightest-first">Lightest First</option>
          <option value="heavier-first">Heavier First</option>
        </select>
      </div>
    </div>
  );
}
