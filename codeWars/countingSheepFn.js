https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript

count = (acc, curr) => {
  if (curr === true) {
    acc += 1; 
  }
  return acc;
}

countSheeps = (arrayOfSheep) => {
  return arrayOfSheep.reduce(count, 0);
}

console.log(countSheeps([true, true, false]))