//-----FUNCTION-----
// function add(a :number, b :number) : number{
//     return a +b;
// }
// console.log(add(2,5));
// // console.log(add(2,'5'));
//-----INTERFACE-----
// interface hello{
//     name ?: string
//     email ?: string
//     age ?: number
// }
// let person : hello = {
//     name : 'john',
//     age : 30
//     // job : 'Developer'
// }
// console.log(person);
//-----ENUMS-----
var gender;
(function (gender) {
    gender[gender["male"] = 0] = "male";
    gender[gender["female"] = 1] = "female";
    gender[gender["hello"] = 2] = "hello";
})(gender || (gender = {}));
var x = gender.male;
console.log(x);
