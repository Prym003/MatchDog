import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Paginated from "../Paginated/Paginated";
import SideAndSearchBar from "../SideAndSearchBar/SideAndSearchBar";
import "./Home.css";
const { getAllDogs } = require("../../actions/index");

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDogs({}, {}, "A-Z"));
  }, [dispatch]);

  return (
    <div className="home">
      <SideAndSearchBar />
      <Paginated />
    </div>
  );
}
