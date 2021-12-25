// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript/61c2f46a54be0b00426688cf

const sum = (acc, curr) => acc + Math.pow(curr, 2)

const squareSum = (numbers) => numbers.reduce(sum ,0 )

console.log(squareSum([1, 2]))
