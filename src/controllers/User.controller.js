const userService = require('../services/User.service');

exports.getAllUser = async (req, res) => {
    try {
        const user = await userService.getAllUser();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await userService.getUserById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        return res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const user = await userService.updateUser(id, req.body);
    return res.status(200).json(user);
}

exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    await userService.deleteUser(id);
    return res.status(204).end();
}