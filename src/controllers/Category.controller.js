const { where } = require('sequelize');
const categoryService = require('../services/Category.service');

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await categoryService.getAllCategories();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCategoryById = async (req, res) => {
    const { id } = req.params;
    try {
        const category = await categoryService.getCategoryById(id);
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.getCategoryByName = async (req, res) => {
    const { name } = req.params;

    try {
        const category = await categoryService.getCategoryByName(name);

        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.createCategory = async (req, res) => {
    try {
        const category = await categoryService.createCategory(req.body);
        return res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.updateCategory = async (req, res) => {
    const { id } = req.params;
    const category = await categoryService.updateCategory(id, req.body);
    return res.status(200).json(category);
}

exports.deleteCategory = async (req, res) => {
    const { id } = req.params;
    await categoryService.deleteCategory(id);
    return res.status(204).end();
}