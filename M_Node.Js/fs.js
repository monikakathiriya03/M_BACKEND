const fs = require("fs");

// const {add, product} = require("./basic.js");
// const {product} = require('./basic.js');

// console.log(add(5,3));

// Asyncronous Method
// fs.open('../abc.txt',(err,data)=>{
//     if(err){
//         console.log('Failed to open File');
//     }else 
//     console.log('File open Sucessfully');
// })


// Syncronous Method
// fs.openSync('abc.txt');
// console.log('File open Sucessfully');

// Read Method
// let t1 = performance.now();
// console.log('Product is:',product(5,3));
// fs.readFile('../abc.txt','utf-8',(err,data)=>{
//     if(err)
//     console.log('Failed to read File');
// else 
// console.log(data);
// });

// let data = fs.readFileSync('../abc.txt','utf-8');
// console.log(data);
// console.log('Addition is:',add(15,13));
// let t2 = performance.now();
// console.log('Time Difference is:',t2-t1);


// //Write Method
// let txt = `#include <Stdio.h>
// // int main(){
// //     printf("Welcome to Skillqode");
// //     printf("Learning NodeJS");
// // }`;

// fs.writeFile("../basic.c",txt,(err,data)=>{
//    if(err)console.log("Failed to write file");
//    else console.log("File Written Sucessfully");
// });

// fs.writeFileSync("hello.c",txt);
// console.log("File Written Sucessfully");


//Append Method
// let txt = `good morning`;
// fs.appendFile("basic.c",txt,(err,data)=>{
//     if(err)console.log("Failed to write File");
//     else
//     console.log("File Append Sucessfully");
// });

//Close
// fs.close(2,(err) =>{
//     if(err)console.log("Failed to close File");
//     else 
//     console.log("file Closed Sucessfully");
// });