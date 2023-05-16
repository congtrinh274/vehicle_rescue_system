"use strict";
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db.config');

class Partner extends Model {
  static associate(models) {
    // define association here
  }
}

Partner.init(
  {
    idDoiTac: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ten: {
      type: DataTypes.STRING(255),
    },
    soDienThoai: {
      type: DataTypes.STRING(11),
    },
    diaChiCoSo: {
      type: DataTypes.STRING(255),
    },
    kinhDo: {
      type: DataTypes.FLOAT,
    },
    viDo: {
      type: DataTypes.FLOAT,
    },
  },
  {
    sequelize,
    modelName: "Partner",
    tableName: "partner",
    timestamps: true,
    collate: "utf8_unicode_ci",
  }
);


module.exports = Partner;
