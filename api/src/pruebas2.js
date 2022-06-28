const fs = require('fs');
let a = ['A', "B", "C"]
const [A, B, C] = a
function getA() {
  return A;
}

function getB(callback) {
  setTimeout(() => {
      callback(B);
  }, 10);
}

function getC() {
  return Promise.resolve().then(() => C);
}

function getABC() {
  let a = getA()
  let b = getB((el)=>{
      return el
  })
  let promise = getC()
  console.log('a:', a )
//   console.log('b:', b )
//   console.log('c:', promise )
  return Promise.all(a,b,promise)
}

getABC().then((arr) => console.log(arr));