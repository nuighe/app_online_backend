const express = require('express');
const route = express.Router();
const categoryController = require('../controllers/Category.controller');

route.get('/', categoryController.getAllCategories);
route.get('/:id', categoryController.getCategoryById);
route.get('/:name', categoryController.getCategoryByName);
route.post('/', categoryController.createCategory);
route.put('/:id', categoryController.updateCategory);
route.delete('/:id', categoryController.deleteCategory);

module.exports = route;
