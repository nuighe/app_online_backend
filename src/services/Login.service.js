const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
require("dotenv").config();

const login = async (email, password) => {

    const user = await User.findOne({ where: { email } });
    if (!user) {
        return "user khong ton tai"
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        return "password khong dung"
    }

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
        expiresIn: '1h'
    });

    return {
        token,
        user: {
            email,

        }
    };
};

module.exports = { login };
