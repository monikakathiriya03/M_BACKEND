// LOCAL HOST----5
const http = require('http');

const server5 = http.createServer((req,res)=>{
    res.end('Welcome to Local Server...5...');
});   //Server Create

server5.listen(2365,()=>{
    console.log('Server Start at port 2365');
});