
const brandService = require('../services/Brand.service');

exports.getAllBrand = async (req, res) => {
    try {
        const brand = await brandService.getAllBrand();
        res.status(200).json(brand);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
