// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

function abbrevName(name){
  let arr = name.split(" ");
  let res = arr[0].charAt(0) + "." + arr[1].charAt(0);
  return res;
}
console.log(abbrevName("Viktor Berdyshev"));