const express = require('express');
const app = express();
const port = 2727;
const morgan = require('morgan');


const mongoose = require('mongoose');
// Database connection
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/mNode');
}
main()
.then(()=>console.log('DB is Connected....'))
.catch(err => console.log(err));

// Middleware
app.use(express.json());
app.use(morgan('dev'));

const userRoutes = require('./routes/user.routes');
app.use('/api/users', userRoutes)

app.listen(port, () => {
    console.log(`Server running at http://localhost:2727`);
});