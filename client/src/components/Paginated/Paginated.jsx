import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import "./Paginated.css";
const { pageController } = require("../../actions");

export default function Paginated() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.orderedAndFilteredDogs);
  const pagedController = useSelector((state) => state.pageControler);

  //Page Controller
  const { currentPage, dogsPerPage } = pagedController;

  //pagination
  const firstDog = (currentPage - 1) * dogsPerPage;
  const lastDog = currentPage * dogsPerPage;
  let lastPage = 1;
  if (typeof allDogs === "object") {
    lastPage = Math.ceil(allDogs.length / dogsPerPage);
  }
  const paginatedDogs = allDogs.slice(firstDog, lastDog);
  const pages = [currentPage - 1, currentPage, currentPage + 1];
  const checkResult = Array.isArray(allDogs);
  const checkFirstButton = currentPage - 1 >= 2;
  const checkLastButton = currentPage + 2 <= lastPage;

  //Handlers
  const handlePageChange = (e, pageNumber) => {
    dispatch(pageController(pageNumber));
  };

  return (
    <div className="pagination">
      {/* Pagination buttons */}
      <div className="divButtons">
        {checkFirstButton ? (
          <button onClick={(e) => handlePageChange(e, 1)}>{'<<'}</button>
        ) : null}
        {pages.map((p) => {
          if (p === currentPage) {
            return (
              <h3 key={p}>
                {currentPage} / {lastPage}
              </h3>
            );
          } else if (p >= 1 && p <= lastPage) {
            return (
              <button key={p} onClick={(e) => handlePageChange(e, p)}>
                {p === currentPage - 1 ? "<" : ">"}
              </button>
            );
          }
        })}
        {checkLastButton ? (
          <button onClick={(e) => handlePageChange(e, lastPage)}>
            {'>>'}
          </button>
        ) : null}
      </div>
      {/* Pagination */}
      <div className="cards">
        {checkResult ? (
          paginatedDogs.map((dog) => {
            return (
              <div key={dog.id}>
                <Card
                  id={dog.id}
                  url={dog.image}
                  name={dog.name}
                  weight={dog.weight}
                  temperaments={dog.temperaments}
                />
              </div>
            );
          })
        ) : (
          <div className='notFound'>
          <h3>{allDogs}</h3>
          </div>
        )}
      </div>
    </div>
  );
}
