const express = require('express');
const router = express.Router();
const loginController = require('../controllers/Login.controller');

router.post('/', loginController.login);

module.exports = router;
