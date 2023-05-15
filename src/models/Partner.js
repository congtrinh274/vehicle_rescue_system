const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Partner = sequelize.define('Partner', {
  idDoiTac: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ten: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  soDienThoai: {
    type: DataTypes.STRING(11),
    allowNull: false,
  },
  diaChiCoSo: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  kinhDo: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  viDo: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  thoiDiemDangKyDoiTac: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'doitac',
  timestamps: false,
});

module.exports = Partner;
