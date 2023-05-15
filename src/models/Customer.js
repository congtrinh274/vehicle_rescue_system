const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Customer = sequelize.define('Customer', {
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
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'nguoidung',
  timestamps: false, 
});

module.exports = Customer;
