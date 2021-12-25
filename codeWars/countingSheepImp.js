https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript

countSheeps = (arrayOfSheep) => {
  let counter = 0;
  for (const sheep of arrayOfSheep) {
    if (sheep === true) {
      counter += 1; 
    }
  }
  return counter;
}

console.log(countSheeps([true, true, false]))