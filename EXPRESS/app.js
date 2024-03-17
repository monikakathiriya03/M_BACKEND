require('dotenv').config();
const express = require('express');
const app = express();
const port = 2727;
const morgan = require('morgan');
const mongoose = require('mongoose');

// Database connection
async function main() {
    await mongoose.connect(process.env.Mongo_DB_URL);
    // await mongoose.connect('mongodb://127.0.0.1:27017/sNode');
}
main()
.then(()=>console.log('DB is Connected....'))
.catch(err => console.log(err));

// Middleware
app.use(express.json());
app.use(morgan('dev'));

const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/product.routes');
const cartRoutes = require('./routes/cart.routes');
const orderRoutes = require('./routes/order.routes');
app.use('/api/users', userRoutes)
app.use('/api/products',productRoutes);
app.use('/api/cart',cartRoutes);
app.use('/api/order',orderRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost 2727`);
});