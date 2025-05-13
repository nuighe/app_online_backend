'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NewDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      NewDetail.belongsTo(models.News, {
        foreignKey: 'news_id'
      })
      NewDetail.belongsTo(models.Product, {
        foreignKey: 'product_id'
      })
    }
  }
  NewDetail.init({
    product_id: DataTypes.INTEGER,
    new_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'NewDetail',
    tableName: 'NewDetails',
    underscored: true
  });
  return NewDetail;
};