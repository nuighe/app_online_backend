const express = require('express');
const route = express.Router();
const userController = require('../controllers/User.controller');

route.post('/', userController.createUser);

module.exports = route;

