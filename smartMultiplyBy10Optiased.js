const multiplyBy10 = (number) => {
    if(number === 'string'){
      JSON.parse(number)
      return number * 10
    }
    return number * 10
}

const arr = [1, 3, 10, '23', 2]
for(let i = 0; i < arr.length; i++){
  console.log(" " + multiplyBy10(arr[i]))
}
