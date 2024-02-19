// HTTP MODULES
const http = require('http');
const fs = require('fs');
const data = fs.readFileSync('./hello.txt','utf-8');

const server = http.createServer((req,res)=>{
    // res.setHeader('Dummy','Dummy Value');
    res.setHeader('Content-type','text/html');
    // res.setHeader('Content-type','application/json');
    res.end('Welcome to Local Servar....');
});

// const server = http.createServer();
// server.on('request',(req,res)=>{
//     res.setHeader('Content-type','text/html');
//     // res.write('<h1>Hello</h1>');
//     // res.write('<h1 style="color:red">Hello</h1>');
//     res.write('{"hello":123}');
//     res.end(data);
// });

server.listen(9845,()=>{
    console.log('Server Start at port 9845');
});