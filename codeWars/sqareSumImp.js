// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript/61c2f46a54be0b00426688cf

const squareSum = (numbers) => {
  let sum = 0;
  for (let num of numbers){
    sum += Math.pow(num, 2);
  }
  return sum;
}
console.log(squareSum([1, 2]))