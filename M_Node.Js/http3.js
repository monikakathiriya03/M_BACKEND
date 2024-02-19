// LOCAL HOST----3
const http = require('http');

const server3 = http.createServer((req,res)=>{
    res.end('Welcome to Local Server...3...');
});   //Server Create

server3.listen(1379,()=>{
    console.log('Server Start at port 1379');
});