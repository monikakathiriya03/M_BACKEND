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

// const express = require('express');
// const app = express();    // server create
// const port = 2828;
// const morgan = require('morgan');
// const path = require('path');

// let myFun = (req, res, next) =>{
//         // console.log(req.query);
    
//         if((req.query.age)>=18){
//             next();
//         }else{
//             res.send("Sorry, you have under below 18");
//         }
//     }

//     // app.use(express.json()); // built-in 
//     // app.use(express.urlencoded({ extended: true })); // built-in
//     app.use('/hello',express.static(path.join(__dirname,'public')));  // built-in
    
//     app.use(morgan('dev'));
//     app.get('/',myFun,(req, res) =>{
//         // console.log(req.body);
//         res.send('about');
//     });

// //     app.use(express.static(path.join(__dirname, 'public')));
// // app.get('/page', (req, res) => {
// //     // Read the HTML file
// //     const htmlPath = path.join(__dirname, 'public', 'index.html');
// //     res.sendFile(htmlPath);
// // });
    
//     app.post('/',(req, res) =>{
//         console.log(req.body);
//         res.send('Post Method');
//     })

//     app.listen(port,()=>{
//         console.log('Server Start at http://localhost:2828');
//     });


//*---------28-02-2024----------*

 const express = require('express');
 const app = express();
 const port = 2828;
 const morgan = require('morgan');
 const Products = require('./public/products.json');
//  console.log(products);

 //Middleware
 app.use(express.json());
 app.use(morgan('dev'));

 //End-points - CRUD
 app.post('/products',(req, res)=>{
    //  console.log(req.body);
     const product = req.body;
     Products.push(product);
     // products.push({...req.body});
     res.status(201).json({message: 'Product is added....'});
 });

 app.get('/products',(req, res)=>{
     res.status(200).json(Products);
 });


 app.get('/products/single-product',(req, res)=>{
    const id = +req.query.id;
    console.log(id);
    let product = Products.find((item)=>item.id === id);
    res.status(200).json(product);
});


// app.listen(port,()=>{
//     console.log('Server Start at http://localhost:2828');
// });


//*---------29-02-2024----------*

// Replace Single Product
app.put('/products/replace-product',(req, res)=>{
    const id = +req.query.id;
    let productIndex = Products.findIndex((item)=>item.id === id);
    let product = Products[productIndex];
    Products.splice(productIndex, 1,{...req.body});
    // console.log(product);
    res.status(200).json({message:'Product Replace successfully'});
});

// Update Single Product
app.patch('/products/update-product',(req, res) => {
    const id = +req.query.id;
    let productIndex = Products.findIndex((item)=>item.id === id);
    let product = Products[productIndex];
    Products.splice(productIndex, 1,{...product,...req.body});
    // console.log(product);
    res.status(200).json({message:'Product Update successfully'});
});

// Delete Single Product

app.delete('/products/delete-product',(req, res) => {
    const id = +req.query.id;
    let productIndex = Products.findIndex((item)=>item.id === id);
    Products.splice(productIndex, 1);
    // console.log(product);
    res.status(200).json({message:'Product Delete successfully'});
});

 app.listen(port,()=>{
     console.log('Server Start at http://localhost:2828');
 });