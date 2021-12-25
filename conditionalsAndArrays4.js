const noPattern = (fName, num) => {
  const obj = {
    mulBy2: x => 2*x,
    mulBy10: x => 10*x,
  }
  return obj[fName](num)
}

console.log(
  noPattern('mulBy10', 3)
  )