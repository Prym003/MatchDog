// export const allTypes = {
//   GET_DOGS: "GetDogs",
//   GET_DOGS_NAME: "GetDogsByName",
//   GET_DOG_ID: "GetDogById",
//   GET_TEMPERAMENTS: "GetTemperaments",
// };
// let { GET_DOGS, GET_DOGS_NAME, GET_DOG_ID, GET_TEMPERAMENTS } = allTypes;
// export const allUrls = {
//   URL_GET_DOGS: "http://localhost:3001/dogs",
//   URL_GET_DOGS_NAME: "http://localhost:3001/dogs?name=",
//   URL_GET_DOG_ID: "http://localhost:3001/dogs/",
//   URL_GET_TEMPERAMENTS: "http://localhost:3001/temperament",
// };
// let { URL_GET_DOGS, URL_GET_DOGS_NAME, URL_GET_DOG_ID, URL_GET_TEMPERAMENTS } =
//   allUrls;

// let url1 = "http://localhost:3001/dogs?name=ti";
// let url2 = "http://localhost:3001/dogs/7";

// let caso1 = url1.includes(URL_GET_DOGS_NAME);
// let caso2 = url2.includes(URL_GET_DOG_ID);

// // console.log(caso1);
// // console.log(caso2);

// let check = (url) => {
//   let pruebas = { payload: "data" };
//   url.includes(URL_GET_DOGS_NAME)
//     ? (url = URL_GET_DOGS_NAME)
//     : url.includes(URL_GET_DOG_ID)
//     ? (url = URL_GET_DOG_ID)
//     : (url = url);
//   switch (url) {
//     case URL_GET_DOGS:
//       return (pruebas = {
//         ...pruebas,
//         type: "URL_GET_DOGS",
//       });
//     case URL_GET_TEMPERAMENTS:
//       return (pruebas = {
//         ...pruebas,
//         type: "URL_GET_TEMPERAMENTS",
//       });
//     case URL_GET_DOGS_NAME:
//       return (pruebas = {
//         ...pruebas,
//         type: "URL_GET_DOGS_NAME",
//       });
//     case URL_GET_DOG_ID:
//       return (pruebas = {
//         ...pruebas,
//         type: "URL_GET_DOG_ID",
//       });
//     default:
//       pruebas = {
//         ...pruebas,
//         type: "no funciono",
//       };
//   }
//   return pruebas;
// };

// let comprobacion = check("http://localhost:3001/dogs/524");
// // console.log(comprobacion);

// const dogs = [
//   { name: "6" },
//   { name: "1" },
//   { name: "3" },
//   { name: "2" },
//   { name: "4" },
//   { name: "5" },
//   { name: "0" },
// ];
// let perPAGE = 2;
// let currentPage = 4;
// const lastPage = dogs.length / perPAGE;

// let dogInicial = (currentPage - 1) * perPAGE;
// let dogFinal = currentPage * perPAGE;

// console.log(dogInicial);
// console.log(dogFinal);
// console.log(Math.ceil(lastPage));

// const showDogs = dogs.slice(dogInicial, dogFinal);

// console.log(showDogs);

// let numero = 5;

// console.log(typeof numero.toString());

let doges = [
  {
    id: 1,
    name: "Affenpinscher",
    weight: "3 - 6",
    height: "23 - 29",
    life_span: "10 - 12 years",
    temperament: [
      "Stubborn",
      "Curious",
      "Playful",
      "Adventurous",
      "Active",
      "Fun-loving",
    ],
    image: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
    createInDb: true,
  },
  {
    id: 2,
    name: "Afghan Hound",
    weight: "23 - 27",
    height: "64 - 69",
    life_span: "10 - 13 years",
    temperament: ["Aloof", "Clownish", "Dignified", "Independent", "Happy"],
    image: "https://cdn2.thedogapi.com/images/hMyT4CDXR.jpg",
  },
  {
    id: 3,
    name: "African Hunting Dog",
    weight: "20 - 30",
    height: "76",
    life_span: "11 years",
    temperament: ["Wild", "Hardworking", "Dutiful"],
    image: "https://cdn2.thedogapi.com/images/rkiByec47.jpg",
  },
  {
    id: 4,
    name: "Airedale Terrier",
    weight: "18 - 29",
    height: "53 - 58",
    life_span: "10 - 13 years",
    temperament: [
      "Outgoing",
      "Friendly",
      "Alert",
      "Confident",
      "Intelligent",
      "Courageous",
    ],
    image: "https://cdn2.thedogapi.com/images/1-7cgoZSh.jpg",
    createInDb: true,
  },
  {
    id: 5,
    name: "Akbash Dog",
    weight: "41 - 54",
    height: "71 - 86",
    life_span: "10 - 12 years",
    temperament: ["Loyal", "Independent", "Intelligent", "Brave"],
    image: "https://cdn2.thedogapi.com/images/26pHT3Qk7.jpg",
  },
  {
    id: 9,
    name: "Alaskan Malamute",
    weight: "29 - 45",
    height: "58 - 64",
    life_span: "12 - 15 years",
    temperament: [
      "Friendly",
      "Affectionate",
      "Devoted",
      "Loyal",
      "Dignified",
      "Playful",
    ],
    image: "https://cdn2.thedogapi.com/images/dW5UucTIW.jpg",
  },
  {
    id: 6,
    name: "Akita",
    weight: "29 - 52",
    height: "61 - 71",
    life_span: "10 - 14 years",
    temperament: [
      "Docile",
      "Alert",
      "Responsive",
      "Dignified",
      "Composed",
      "Friendly",
      "Receptive",
      "Faithful",
      "Courageous",
    ],
    image: "https://cdn2.thedogapi.com/images/BFRYBufpm.jpg",
  },
  {
    id: 8,
    name: "Alaskan Husky",
    weight: "17 - 23",
    height: "58 - 66",
    life_span: "10 - 13 years",
    temperament: ["Friendly", "Energetic", "Loyal", "Gentle", "Confident"],
    image: "https://cdn2.thedogapi.com/images/-HgpNnGXl.jpg",
  },
  {
    id: 10,
    name: "aaaaa",
    weight: "27 - 54",
    height: "56 - 69",
    life_span: "10 - 12 years",
    temperament: [
      "Friendly",
      "Assertive",
      "Energetic",
      "Loyal",
      "Gentle",
      "Confident",
      "Dominant",
    ],
    image: "https://cdn2.thedogapi.com/images/pk1AAdloG.jpg",
  },
  {
    id: 7,
    name: "ben10",
    weight: "25 - 41",
    height: "46 - 61",
    life_span: "12 - 13 years",
    temperament: [
      "Loving",
      "Protective",
      "Trainable",
      "Dutiful",
      "Responsible",
    ],
    image: "https://cdn2.thedogapi.com/images/33mJ-V3RX.jpg",
  },
];

// let temp = {
//   Active: true,
//   Adventurous: false,
//   Aloof: false,
//   Curious: false,
//   Dignified: false,
//   Playful: false,
//   Stubborn: false,
//   Alert: true,
// };

// const filtersToApply = (allTempFilter) => {
//   let filterTrue = [];
//   let allFilters = Object.keys(allTempFilter);
//   let allValues = Object.values(allTempFilter);
//   for (let i = 0; i < allFilters.length; i++) {
//     allValues[i] === true ? filterTrue.push(allFilters[i]) : false;
//   }
//   return filterTrue;
// };

// const filterDogs = (filteredTemp, allDogs) => {
//   let filteredDogs = allDogs.filter((Dog) => {
//     let includesTemp = false;
//     filteredTemp.forEach((temp) => {
//       Dog.temperament.includes(temp) ? (includesTemp = true) : false;
//     });
//     return includesTemp;
//   });
//   return filteredDogs;
// };

function mergeSort(array, propToCompare, funcToApply, orderBy = "LtH") {
  if (array.length <= 1) return array;

  // we constantly separate the array into 2
  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);

  //we do recursion until I have individual arrays left
  left = mergeSort(left, propToCompare, funcToApply, orderBy);
  right = mergeSort(right, propToCompare, funcToApply, orderBy);

  //merge the array in an orderly fashion
  let ListaOrdenada = [];
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
    } else {
      order = l < r;
    }
    if (order) {
      ListaOrdenada.push(objL);
      leftI++;
    } else {
      ListaOrdenada.push(objR);
      rightI++;
    }
  }
  left = left.slice(leftI);
  right = right.slice(rightI);
  return [...ListaOrdenada, ...left, ...right];
}

function getAvarage(e) {
  let weight = e.split(" - ");
  let min = parseInt(weight[0]);
  let max = parseInt(weight[1]);
  return (min + max) / 2;
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

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

let orderedArr = mergeSort(doges, "name", capitalizeFirstLetter);
let orderedArrbywe = mergeSort(doges, "weight", getAvarage);
console.log(orderedArrbywe);

let objprueba = {
  
};

let filByApiDb = filterByApiDb(doges, objprueba )
console.log(filByApiDb.length)

let allValues = Object.values(objprueba);
console.log(allValues)

const objpruebaa= {
  a: true,
  b: 'caca',
  c: false
}
const changeValOfElObj = (obj) =>{
  Object.keys(obj).forEach((key) => obj[key] = false )
  return obj
}

console.log(changeValOfElObj(objpruebaa))

function isUrl(s) {   
  var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
  return regexp.test(s);
}

function checkImage(url) {
  var request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.send();
  request.onload = function() {
    status = request.status;
    if (request.status == 200) //if(statusText == OK)
    {
      return true
    } else {
      return false
    }
  }
}

let a = checkImage("//www.deepl.com/translator")

console.log(a)