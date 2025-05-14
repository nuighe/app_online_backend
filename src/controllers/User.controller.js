const userService = require('../services/User.service');


exports.createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        return res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


