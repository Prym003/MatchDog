const unicorns = [
  {
    name: "bob",
    age: "30",
    color: "red",
    favoriteFruitId: 1,
    active: true,
  },
  {
    name: "john",
    age: "20",
    color: "blue",
    favoriteFruitId: 2,
    active: false,
  },
  {
    name: "jane",
    age: "25",
    color: "black",
    favoriteFruitId: 1,
    active: true,
  },
  {
    name: "doge",
    age: "21",
    color: "yellow",
    active: true,
  },
  {
    name: "cate",
    age: "33",
    color: "white",
    favoriteFruitId: 1,
    active: true,
  },
];

const fruits = [
  {
    id: 1,
    name: "apple",
  },
  {
    id: 2,
    name: "watermelon",
  },
];


const filterAndOrder = (unicorns, fruits) => {
  let filAndOrderUnicorns = unicorns;
  //filter by active
  filAndOrderUnicorns = unicorns.filter((unicorn) => unicorn.active === true);
  //filter by color

  filAndOrderUnicorns = filAndOrderUnicorns.filter(
    (unicorn) => unicorn.color !== "black"
  );

  //add fav fruit by id
  let fruitIds = fruits.map((fruit) => {
    return fruit.id;
  });
  let fruitNames = fruits.map((fruit) => {
    return fruit.name;
  });
  filAndOrderUnicorns = filAndOrderUnicorns.map((unicorn) => {
    let updetedUnicorn = unicorn
    if (fruitIds.includes(unicorn.favoriteFruitId)) {
      let index = fruitIds.indexOf(unicorn.favoriteFruitId);
      updetedUnicorn = {
        ...updetedUnicorn,
        favorite_Fruit: fruitNames[index],
      };
    }
    if (unicorn.name === "doge") {
      updetedUnicorn = {
        ...updetedUnicorn,
        muchWow: true,
        suchFat: true,
        lovesCate: false,
      };
    }
    return updetedUnicorn
  })
  
  //order filtered Array
  filAndOrderUnicorns = mergeSort(filAndOrderUnicorns, "age", null, "HtL");
  console.log(filAndOrderUnicorns)
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
    let l = objL[propToCompare];
    let r = objR[propToCompare];
    if (typeof funcToApply === "function") {
      l = funcToApply(objL[propToCompare]);
      r = funcToApply(objR[propToCompare]);
    }
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

filterAndOrder(unicorns,fruits)

