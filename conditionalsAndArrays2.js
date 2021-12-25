const noPattern = (num) => {
  const obj = {
    0: 0,
    1: 2,
    2: 10,
    3: 30,
    4: 0,
    5: 7,
    6: Infinity
  }
  return obj[num];
}

console.log(noPattern(4))