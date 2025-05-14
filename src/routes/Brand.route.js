const express = require('express');
const route = express.Router();
const brandController = require('../controllers/Brand.controller');

route.get('/', brandController.getAllBrand);

module.exports = route;
