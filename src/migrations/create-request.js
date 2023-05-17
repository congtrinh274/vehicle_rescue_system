'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('request', {
      idYeuCau: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      idNguoiDung: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'customer',
          key: 'idNguoiDung',
        },
      },
      thoiGianYeuCau: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      thongTinXe: {
        type: Sequelize.STRING(255),
      },
      kinhDo: {
        type: Sequelize.FLOAT(10, 6),
      },
      viDo: {
        type: Sequelize.FLOAT(10, 6),
      },
      moTa: {
        type: Sequelize.TEXT,
      },
      trangThai: {
        type: Sequelize.ENUM('Chờ xử lý', 'Đã nhận yêu cầu', 'Đang đến hiện trường', 'Đã giải quyết', 'Từ chối yêu cầu'),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('request');
  }
};
