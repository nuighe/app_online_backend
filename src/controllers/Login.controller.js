const loginService = require('../services/Login.service');

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        console.log("check login>>>>", req.body);
        const result = await loginService.login(email, password);
        res.json(result);
    } catch (err) {
        res.status(401).json({ message: err.message });
    }
};

module.exports = { login };
