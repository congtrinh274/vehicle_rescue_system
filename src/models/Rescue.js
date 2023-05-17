const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db.config');
const Request = require('./Request');
const Partner = require('./Partner');

class Rescue extends Model {}

Rescue.init(
  {
    idCuuHo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    idYeuCau: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Request,
        key: 'idYeuCau',
      },
    },
    idDoiTac: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Partner,
        key: 'idDoiTac',
      },
    },
    trangThai: {
      type: DataTypes.ENUM('Đang đến hiện trường', 'Đang vận chuyển', 'Đang sửa chữa', 'Đã hoàn thành'),
    },
    danhGiaTuKH: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: 'Rescue',
    tableName: 'rescue',
    timestamps: false,
    collate: 'utf8_unicode_ci',
  }
);

module.exports = Rescue;
