// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

function abbrevName(name){
  let res = name.charAt(0);
  for(let i = 0; i < name.length; i++){
    if(name.charAt(i) === " "){
      res = res + "." + name.charAt(i + 1);
    }
  }
  return res.toUpperCase();
}
console.log(abbrevName("Viktor Berdyshev"));