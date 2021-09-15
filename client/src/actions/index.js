import axios from "axios";

//usefull functions
export const allUrls = {
  URL_GET_DOGS: "http://localhost:3001/dogs",
  URL_GET_DOGS_NAME: "http://localhost:3001/dogs?name=",
  URL_GET_DOG_ID: "http://localhost:3001/dogs/",
  URL_GET_TEMPERAMENTS: "http://localhost:3001/temperament",
  URL_POST_DOG: "http://localhost:3001/dogs/create",
};
let {
  URL_GET_DOGS,
  URL_GET_DOGS_NAME,
  URL_GET_DOG_ID,
  URL_GET_TEMPERAMENTS,
  URL_POST_DOG,
} = allUrls;

export const allTypes = {
  GET_DOGS: "GetDogs",
  GET_DOGS_NAME: "GetDogsByName",
  GET_DOG_ID: "GetDogById",
  GET_TEMPERAMENTS: "GetTemperaments",
  FILTER_ORDER: "FilterAndOrder",
  CLEAN_DOG_ID: "CleanDogId",
  PAGINATION: "Pagination",
};
let {
  GET_DOGS,
  GET_DOGS_NAME,
  GET_DOG_ID,
  GET_TEMPERAMENTS,
  FILTER_ORDER,
  CLEAN_DOG_ID,
  PAGINATION,
} = allTypes;

//all the actions
export function filterAndOrderDogs(
  temperamentFilters = {},
  apiOrDataBase = {},
  orderBy = "A-Z"
) {
  return async (dispatch) => {
    let action = {
      type: FILTER_ORDER,
      payload: [temperamentFilters, apiOrDataBase, orderBy],
    };
    return dispatch(action);
  };
}

export function getAllDogs(tempFilters, apiDbFilter, orderBy) {
  return async (dispatch) => {
    let allData = await axios(URL_GET_DOGS);
    let payload = [allData.data, tempFilters, apiDbFilter, orderBy];
    let action = {
      type: GET_DOGS,
      payload,
    };
    return dispatch(action);
  };
}

export function getTemperaments() {
  return async (dispatch) => {
    let allData = await axios(URL_GET_TEMPERAMENTS);
    let action = {
      type: GET_TEMPERAMENTS,
      payload: allData.data,
    };
    return dispatch(action);
  };
}

export function getDogsByName(name, tempFilters, apiDbFilter, orderBy) {
  return async (dispatch) => {
    let allData = await axios(URL_GET_DOGS_NAME + name.toString());
    let payload = [allData.data, tempFilters, apiDbFilter, orderBy];
    let action = {
      type: GET_DOGS_NAME,
      payload
    };
    return dispatch(action);
  };
}

export function getDogById(id) {
  return async (dispatch) => {
    let allData = await axios(URL_GET_DOG_ID + id.toString());
    let action = {
      type: GET_DOG_ID,
      payload: allData.data,
    };
    return dispatch(action);
  };
}

export function cleanDogId() {
  return (dispatch) => {
    let action = {
      type: CLEAN_DOG_ID,
      payload: [],
    };
    return dispatch(action);
  };
}

export function createDog(payload) {
  return async (dispatch) => {
    const newDog = await axios.post(URL_POST_DOG, payload);
    return newDog;
  };
}

export function pageController(currentPage) {
  return async (dispatch) => {
    let action = {
      type: PAGINATION,
      payload: {
        currentPage,
        dogsPerPage: 8,
      }
    }
    return dispatch(action)
  };
}
