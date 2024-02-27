// const express = require('express');
// const app = express();    // server create
// const port = 2828;
// const morgan = require('morgan');

// //middleware

// let myFun = (req, res, next) =>{
//     // console.log(req.query);

//     if((req.query.age)>=18){
//         next();
//     }else{
//         res.send("Sorry, you have under below 18");
//     }
// }

// app.use(myFun); // Application Level Middleware
// // app.use(express.json()); //built-in middleware
// app.use(morgan('dev')); //morgan middleware
// app.get('/',myFun,(req, res) =>{
//     res.send('Welcome to Express JS');
// });
// app.post('/',(req, res) =>{
//     res.send('Post Method');
// });
// app.listen(port,()=>{
//     console.log('Server Start at http://localhost:2828');
// });
           


//*---------27-02-2024----------*

const express = require('express');
const app = express();    // server create
const port = 2828;
const morgan = require('morgan');
const path = require('path');

let myFun = (req, res, next) =>{
        // console.log(req.query);
    
        if((req.query.age)>=18){
            next();
        }else{
            res.send("Sorry, you have under below 18");
        }
    }

    // app.use(express.json()); // built-in 
    // app.use(express.urlencoded({ extended: true })); // built-in
    app.use('/hello',express.static(path.join(__dirname, 'public')));  // built-in

    app.use(morgan('dev'));
    app.get('/',myFun,(req, res) =>{
        // console.log(req.body);
        res.send('about');
    });
    app.post('/',(req, res) =>{
        console.log(req.body);
        res.send('Post Method');
    });

    app.listen(port,()=>{
        console.log('Server Start at http://localhost:2828');
    });