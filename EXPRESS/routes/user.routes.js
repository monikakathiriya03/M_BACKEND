const express = require('express');
const userRoutes = express.Router();
const { verifyToken} = require('../helpers/verifyTokan');
const {
    registerUser,
    loginUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
} = require('../controller/user.controller');

userRoutes.post('/register-user', registerUser);
userRoutes.post('/login-user', loginUser);
userRoutes.get('/get-all-users',verifyToken, getAllUsers);
userRoutes.get('/get-user',verifyToken, getUser);
// userRoutes.put('/update-user', updateUser);
// userRoutes.delete('/delete-user', deleteUser);

module.exports = userRoutes;