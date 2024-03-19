const express = require('express');
const server = express();
const path = require('path');
const ejs = require('ejs');

// server.set("view engine","hbs");
server.set("view engine","ejs");

server.get('/student',(req,res)=>{
    let data = {
        name: 'priyank',
        course: "Flutter Developer",
        age: 22,
        hobbies: ['music', 'cricket']
    }
    res.render('student',data);
});

server.listen(2727,()=>{
    console.log(`Server strt at http://localhost:2727`);
});