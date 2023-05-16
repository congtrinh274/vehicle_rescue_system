'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('customer', {
      idNguoiDung: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      tenNguoiDung: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      matKhau: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      soDienThoai: {
        type: Sequelize.STRING(11),
        allowNull: false,
      },
      diaChi: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      anhDaiDien: {
        type: Sequelize.STRING(255),
      },
      thoiDiemTaoTK: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
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
    await queryInterface.dropTable('customer');
  }
};
