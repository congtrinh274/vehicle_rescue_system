'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('rescue', {
      idCuuHo: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      idYeuCau: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'request',
          key: 'idYeuCau',
        },
      },
      idDoiTac: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'partner',
          key: 'idDoiTac',
        },
      },
      trangThai: {
        type: Sequelize.ENUM('Đang đến hiện trường', 'Đang vận chuyển', 'Đang sửa chữa', 'Đã hoàn thành')
      },
      danhGiaTuKH: {
        type: Sequelize.TEXT,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('rescue');
  }
};
