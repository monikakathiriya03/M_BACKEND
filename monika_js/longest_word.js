let alph = prompt("enter alphabetic string : ");

let r = longest_word(alph);
console.log("longest word is : ",r);

function longest_word(string){
let words = string.split(' ');
let result = '';

for(let i = 0; i < words.length; i++){
if(words[i].length > result.length){
     result = words[i];
}
}
  return result;
}