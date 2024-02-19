// LOCAL HOST----4
const http = require('http');

const server4 = http.createServer((req,res)=>{
    res.end('Welcome to Local Server...4...');
});   //Server Create

server4.listen(5314,()=>{
    console.log('Server Start at port 5314');
});