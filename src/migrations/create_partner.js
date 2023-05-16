'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('partner', {
      idDoiTac: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      ten: {
        type: Sequelize.STRING(255),
      },
      soDienThoai: {
        type: Sequelize.STRING(11),
      },
      diaChiCoSo: {
        type: Sequelize.STRING(255),
      },
      kinhDo: {
        type: Sequelize.FLOAT,
      },
      viDo: {
        type: Sequelize.FLOAT,
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
    await queryInterface.dropTable('partner');
  }
};
