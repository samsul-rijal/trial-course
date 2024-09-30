'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.User, {
        as: 'user',
        foreignKey: 'userId'
      });

      Product.belongsToMany(models.Transaction, {
        through: 'ProductTransaction',
        foreignKey: 'productId'
      });

    }
  }
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    stock: DataTypes.INTEGER,
    image: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};