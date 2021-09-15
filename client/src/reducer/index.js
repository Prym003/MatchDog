const { allTypes /*, allUrls*/ } = require("../actions/index");
let {
  GET_DOGS,
  GET_DOGS_NAME,
  GET_DOG_ID,
  GET_TEMPERAMENTS,
  FILTER_ORDER,
  CLEAN_DOG_ID,
  PAGINATION,
} = allTypes;

let initialState = {
  searchedDogs: [],
  orderedAndFilteredDogs: [],
  temperaments: [],
  dogById: [],
  pageControler: {
    currentPage: 1,
    dogsPerPage: 8,
  },
};

//rootReducer
export default function Controller(state = initialState, action) {
  const { type, payload } = action;
  const { searchedDogs } = state;
  switch (type) {
    case GET_DOGS:
      let searched = payload.shift();
      return {
        ...state,
        searchedDogs: searched,
        orderedAndFilteredDogs: filterAndOrder(searched, payload),
      };
    case GET_DOGS_NAME:
      let searched2 = payload.shift();
      let filAndOrder2 = searched2;
      if (typeof searched2 === "object") {
        filAndOrder2 = filterAndOrder(searched2, payload);
      }
      return {
        ...state,
        searchedDogs: searched2,
        orderedAndFilteredDogs: filAndOrder2,
      };
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: payload,
      };
    case GET_DOG_ID:
      return {
        ...state,
        dogById: payload,
      };
    case FILTER_ORDER:
      let filAndOrder = searchedDogs;
      if (typeof searchedDogs === "object") {
        filAndOrder = filterAndOrder(searchedDogs, payload);
      }
      return {
        ...state,
        orderedAndFilteredDogs: filAndOrder,
      };
    case CLEAN_DOG_ID:
      return {
        ...state,
        dogById: [],
      };
    case PAGINATION:
      return {
        ...state,
        pageControler: payload
      }
    default:
      return state;
  }
}

//Functions
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

const filterDogsByTemp = (filteredTemp, allDogs) => {
  let filAndOrder = allDogs.filter((Dog) => {
    let includesTemp = false;
    filteredTemp.forEach((temp) => {
      if (Dog.temperaments?.includes(temp)) {
        includesTemp = true;
      }
    });
    return includesTemp;
  });
  return filAndOrder;
};

const CapFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const mergeSort = (array, propToCompare, funcToApply, orderBy = "LtH") => {
  if (array.length <= 1) return array;

  // we constantly separate the array into 2
  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);

  //we do recursion until I have individual arrays left
  left = mergeSort(left, propToCompare, funcToApply, orderBy);
  right = mergeSort(right, propToCompare, funcToApply, orderBy);

  //merge the array in an orderly fashion
  let ordenedList = [];
  let leftI = 0;
  let rightI = 0;
  let order = [];

  while (leftI < left.length && rightI < right.length) {
    let objL = left[leftI];
    let objR = right[rightI];
    let l = funcToApply(objL[propToCompare]);
    let r = funcToApply(objR[propToCompare]);
    if (orderBy === "HtL") {
      order = l > r;
    }
    if (orderBy === "LtH") {
      order = l < r;
    }
    if (order) {
      ordenedList.push(objL);
      leftI++;
    } else {
      ordenedList.push(objR);
      rightI++;
    }
  }
  left = left.slice(leftI);
  right = right.slice(rightI);
  return [...ordenedList, ...left, ...right];
};

const getAvarage = (el) => {
  let weight = el.split(" - ");
  let min = parseInt(weight[0]);
  let max = parseInt(weight[1]);
  return (min + max) / 2;
};

const filterByApiDb = (allDogs, apiOrDataBase) => {
  let filAndOrder = allDogs;
  const { api, db } = apiOrDataBase;
  if (api) {
    filAndOrder = allDogs.filter((dog) => dog.createInDb === undefined);
  }
  if (db) {
    filAndOrder = allDogs.filter((dog) => dog.createInDb === true);
  }
  return filAndOrder;
};

const LowToHigh = "LtH";
const HighToLow = "HtL";
const filterAndOrder = (searchedDogs, payload) => {
  const [temperamentFilters, apiOrDataBase, orderBy] = payload;
  let filAndOrder = searchedDogs;
  //filter if api or db
  if (Object.values(apiOrDataBase).includes(true)) {
    filAndOrder = filterByApiDb(filAndOrder, apiOrDataBase);
  }
  //filter By Temps
  if (Object.values(temperamentFilters).includes(true)) {
    const filteredTemp = tempFiltersToApply(temperamentFilters);
    filAndOrder = filterDogsByTemp(filteredTemp, filAndOrder);
  }
  //order filtered Array
  switch (orderBy) {
    case "Z-A":
      return (filAndOrder = mergeSort(
        filAndOrder,
        "name",
        CapFirstLetter,
        HighToLow
      ));
    case "lightest-first":
      return (filAndOrder = mergeSort(
        filAndOrder,
        "weight",
        getAvarage,
        LowToHigh
      ));
    case "heavier-first":
      return (filAndOrder = mergeSort(
        filAndOrder,
        "weight",
        getAvarage,
        HighToLow
      ));
    default:
      return (filAndOrder = mergeSort(
        filAndOrder,
        "name",
        CapFirstLetter,
        LowToHigh
      ));
  }
};
