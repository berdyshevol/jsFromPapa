const convertArrayToObject = arr => {
  const obj = {};
  arr.forEach( (tuple) => obj[tuple[0]] = tuple[1] )
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