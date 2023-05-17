const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db.config');
const Customer = require('./Customer');

class Request extends Model {}

Request.init(
  {
    idYeuCau: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idNguoiDung: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Customer,
        key: 'idNguoiDung',
      },
    },
    thoiGianYeuCau: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    },
    thongTinXe: {
      type: DataTypes.STRING(255),
    },
    kinhDo: {
      type: DataTypes.FLOAT(10, 6),
    },
    viDo: {
      type: DataTypes.FLOAT(10, 6),
    },
    moTa: {
      type: DataTypes.TEXT,
    },
    trangThai: {
      type: DataTypes.ENUM('Chờ xử lý', 'Đã nhận yêu cầu', 'Đang đến hiện trường', 'Đã giải quyết', 'Từ chối yêu cầu'),
    },
  },
  {
    sequelize,
    modelName: 'Request',
    tableName: 'request',
    timestamps: true,
    collate: 'utf8_unicode_ci',
  }
);

module.exports = Request;
