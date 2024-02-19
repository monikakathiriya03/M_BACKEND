// HTTP Module

// LOCAL HOST----1       127.0.0.1:3719
const http = require('http');

const server1 = http.createServer((req,res)=>{
      res.end('Welcome to Local Server...1...');
});   //Server Create

server1.listen(3719,()=>{
      console.log('Server Start at port 3719');
});