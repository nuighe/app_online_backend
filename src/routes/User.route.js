const express = require('express');
const route = express.Router();
const userController = require('../controllers/User.controller');

route.get('/', userController.getAllUser);
route.get('/:id', userController.getUserById);
route.post('/', userController.createUser);
route.put('/:id', userController.updateUser);
route.delete('/:id', userController.deleteUser);

module.exports = route;

