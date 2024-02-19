// LOCAL HOST----2
const http = require('http');

const server2 = http.createServer((req,res)=>{
    res.end('Welcome to Local Server...2...');
});   //Server Create

server2.listen(1937,()=>{
    console.log('Server Start at port 1937');
});