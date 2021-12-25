// 1 -> 2, 2 -> 10, 3-> 30, 4 -> 0, 5 -> 7

const pureFnIf  = (num) => {
  if(num === 0){
    return num + 0
  }

  if(num === 1){
     return num * 2
   }

  if(num === 2){
    return num * 5
  }

  if(num === 3){
    return num * 10
  }

  if(num === 4){
    return num * 0
  }

  if(num === 5){
    return num + 2
  }

  if(num === 6){
    return num / 0
  }
}


console.log(pureFnIf(0))
console.log(pureFnIf(1))
console.log(pureFnIf(2))
console.log(pureFnIf(3))
console.log(pureFnIf(4))
console.log(pureFnIf(5))
console.log(pureFnIf(6))
