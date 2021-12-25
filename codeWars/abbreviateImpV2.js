// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

function abbrevName(name){
  let res = name.charAt(0);
  let i = name.indexOf(" ");
  res = res + "." + name.charAt(i + 1);
  return res.toUpperCase();
}
console.log(abbrevName("Viktor Berdyshev"));