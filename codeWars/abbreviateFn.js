// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript]
const getFitstLetter = (element) => 
  element
    .charAt(0)
    .toUpperCase()

const abbrevName = (name) =>
  name
    .split(" ")
    .map(getFitstLetter)
    .join('.');

console.log(abbrevName("viktor berdyshev olegovych"));