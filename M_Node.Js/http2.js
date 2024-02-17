// HTTP Module

// LOCAL HOST----2       127.0.0.1:1937
const http = require('http');

const server = http.createServer((req,res)=>{
      res.end('Welcome to Local Server...2...');
});   //Server Create

server.listen(1937,()=>{
      console.log('Server Start at port 1937');
});