const { Brand } = require('../models');

exports.getAllBrand = async () => {
    return await Brand.findAll();
}

