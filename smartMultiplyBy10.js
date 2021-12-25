const modifyElement = (element) => {
  const conditionalParse = {
    string: element => Number(element) * 10,
    number: element => element * 10
  };
  const parser = conditionalParse[typeof element]
  return parser(element)
}
const modifyArray = (array) => {
  for (let i = 0; i < array.length; i++){
    array[i] = modifyElement(array[i])
  }
  return array;
}

console.log(modifyArray([1, 5, 14, '37', 69]))