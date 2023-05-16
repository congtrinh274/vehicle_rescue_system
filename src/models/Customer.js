// models/Customer.js
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db.config');

class Customer extends Model {}

Customer.init(
  {
    idNguoiDung: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tenNguoiDung: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    matKhau: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    soDienThoai: {
      type: DataTypes.STRING(11),
      allowNull: false,
    },
    diaChi: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    anhDaiDien: {
      type: DataTypes.STRING(255),
    },
    thoiDiemTaoTK: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    sequelize,
      modelName: 'Customer',
      tableName: 'customer',
      timestamps: true,
      collate: 'utf8_unicode_ci',
  }
);

module.exports = Customer;
