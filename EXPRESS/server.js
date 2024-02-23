// DAY--1   22-02-2024

// const express = require('express');
// const server = express();       // server create

// server.get('/',(req, res)=>{
//     res.end('Welcome to Express.JS');
// });
// server.get('/user',(req, res)=>{
//     res.end('Welcome to User');
// });
// server.get('/product',(req, res)=>{
//     res.end('Welcome to Product');
// });

// server.listen(2727,()=>{
//     console.log(`Server Start At http://localhost:2727`);
// });

// DAY--2  23-02-2024

const express = require('express');
const server = express();
const path = require('path');

server.post('/',(req,res)=>{
    res.send('Post Method');
});
server.get('/',(req,res)=>{
    res.end('Welcome To Express.JS');
});
server.put('/',(req,res)=>{
    res.status(400).json({message: 'Put Method Call'});
});
server.patch('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./abc.txt'));
});
server.delete('/',(req,res)=>{
    res.sendStatus(201);
});

server.listen(2828,()=>{
    console.log(`Server Start At http://localhost:2828`);
});