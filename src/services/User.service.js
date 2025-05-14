const { User } = require('../models');
const bcrypt = require('bcrypt');

exports.createUser = async (userData) => {
    // Mã hóa mật khẩu trước khi lưu vào DB
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    // Gán lại mật khẩu đã mã hóa
    userData.password = hashedPassword;

    // Tạo người dùng với mật khẩu đã mã hóa
    return await User.create(userData);
}