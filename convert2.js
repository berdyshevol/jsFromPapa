const convertArrayToObject = arr => {
  // create empty obj
  const obj = {};
  // fill it using for loop
  for(let tuple of arr){
    const value = tuple[1];
    const key = tuple[0]
    obj[key] = value;
  }
  // return the obj
  return obj;
}

// const arr1 = []
// console.log(convertArrayToObject(arr1))

const arr2 = [
  ['name', 'Viktor'],
  ['age', 12],
  ['school', 'Optima'],
]
console.log(convertArrayToObject(arr2))