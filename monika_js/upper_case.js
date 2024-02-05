let alph = prompt("enter alphabetic string : ");

let r = UpperCase(alph);
console.log("first letter UpperCase : ",r);

function UpperCase(string){
    let words = string.split(' ');
    let result = [];

    for(let i = 0; i < words.length; i++){
        let word = words[i];
        let capitalized = word.charAt(0).toUpperCase() + word.slice(1);
        result.push(capitalized);
    }


    return result.join(' ');
}




