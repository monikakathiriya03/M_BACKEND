const fs = require("fs");
// Synchronously and Asynchronously method

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

//=======>>>>>>>>
// Directly create automatically new file with out you create with 'w' parameter

// *****Asyncronous Method*****

//*-------Open File-------*
// fs.open('../abc2.txt','w',(err,data)=>{
//     if(err){
//         console.log('Failed to open File');
//     }else 
//     console.log('File open Sucessfully');
// });


// *****Syncronous Method*****

// fs.openSync('abc3.txt','w');
// console.log('File open Sucessfully');