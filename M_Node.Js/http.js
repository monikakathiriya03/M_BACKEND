// HTTP Module

// LOCAL HOST----1       127.0.0.1:3719
const http = require('http');

const server1 = http.createServer((req,res)=>{
      res.end('Welcome to Local Server...1...');
});   //Server Create

server1.listen(3719,()=>{
      console.log('Server Start at port 3719');
});

// LOCAL HOST----2

const server2 = http.createServer((req,res)=>{
    res.end('Welcome to Local Server...2...');
});   //Server Create

server2.listen(1937,()=>{
    console.log('Server Start at port 1937');
});

// LOCAL HOST----3

const server3 = http.createServer((req,res)=>{
    res.end('Welcome to Local Server...3...');
});   //Server Create

server3.listen(1379,()=>{
    console.log('Server Start at port 1379');
});

// LOCAL HOST----4

const server4 = http.createServer((req,res)=>{
    res.end('Welcome to Local Server...4...');
});   //Server Create

server4.listen(5314,()=>{
    console.log('Server Start at port 5314');
});

// LOCAL HOST----5

const server5 = http.createServer((req,res)=>{
    res.end('Welcome to Local Server...5...');
});   //Server Create

server5.listen(2365,()=>{
    console.log('Server Start at port 2365');
});