'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductTransaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductTransaction.belongsTo(models.Transaction, {
        foreignKey: 'transactionId'
      });
      ProductTransaction.belongsTo(models.Product, {
        foreignKey: 'productId'
      });
    }
  }
  ProductTransaction.init({
    transactionId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductTransaction',
  });
  return ProductTransaction;
};