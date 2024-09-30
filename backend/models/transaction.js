'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.belongsTo(models.User, {
        as: 'user',
        foreignKey: 'userId'
      });

      Transaction.belongsToMany(models.Product, {
        through: 'ProductTransaction',
        foreignKey: 'transactionId'
      });
    }
  }
  Transaction.init({
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    totalPrice: {
      type: DataTypes.DECIMAL(10, 2)
    },
    paymentStatus: {
      type: DataTypes.ENUM('pending','success','failed'),
      defaultValue: 'pending'
    },
    transactionDate: {
      type: DataTypes.DATE
    },
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};
