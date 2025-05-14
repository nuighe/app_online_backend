const { where } = require('sequelize');
const { User } = require('../models');
const bcrypt = require('bcrypt');

exports.getAllUser = async () => {
    return await User.findAll();
}

exports.getUserById = async (id) => {
    return await User.findByPk(id);
}

exports.createUser = async (userData) => {
    // Mã hóa mật khẩu trước khi lưu vào DB
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    // Gán lại mật khẩu đã mã hóa
    userData.password = hashedPassword;

    // Tạo người dùng với mật khẩu đã mã hóa
    return await User.create(userData);
}

exports.updateUser = async (id, user) => {
    const updateUser = await User.update(user, {
        where: {
            id,
        },
        returning: true
    });
    return updateUser[1][0];
}

exports.deleteUser = async (id) => {
    return await User.destroy({
        where: {
            id,
        },
    });
}