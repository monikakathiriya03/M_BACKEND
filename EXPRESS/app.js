const express = require('express');
const app = express();    // server create
const port = 2828;
const morgan = require('morgan');

//middleware

let myFun = (req, res, next) =>{
    // console.log(req.query);

    if((req.query.age)>=18){
        next();
    }else{
        res.send("Sorry, you have under below 18");
    }
}

app.use(myFun); // Application Level Middleware
// app.use(express.json()); //built-in middleware
app.use(morgan('dev')); //morgan middleware
app.get('/',myFun,(req, res) =>{
    res.send('Welcome to Express JS');
});
app.post('/',(req, res) =>{
    res.send('Post Method');
});
app.listen(port,()=>{
    console.log('Server Start at http://localhost:2828');
});
           