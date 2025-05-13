const { where } = require("sequelize");
const { Category, Brand } = require("../models");
const category = require("../models/category");

exports.getAllCategories = async () => {
    return await Category.findAll();

};

exports.getCategoryById = async (id) => {
    return await Category.findByPk(id);
}

exports.getCategoryByName = async (name) => {
    return await Category.findOne({
        where: { name },
    });
};

exports.createCategory = async (category) => {
    return await Category.create(category);
}

exports.updateCategory = async (id, category) => {
    const updateCategory = await Category.update(category, {
        where: {
            id,
        },
        returning: true
    });
    return updateCategory[1][0];
}

exports.deleteCategory = async (id) => {
    return await Category.destroy({
        where: {
            id,
        },
    });
}