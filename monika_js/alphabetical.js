let alph = prompt("enter alphabetic string: ");

let r = alphabetic_string(alph);
console.log("sorted string : ",r);

function alphabetic_string(string){
    return string.splite('').sort().join('');

    //let array = string.splite('').sort().join('');
    //array.sort();
    //return array.join();
}
