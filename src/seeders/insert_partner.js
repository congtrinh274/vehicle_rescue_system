// seeders/20230517124567-create-partners.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('partner', [
      {
        ten: 'ABC Company',
        soDienThoai: '1234567890',
        diaChiCoSo: '123 Main Street',
        kinhDo: 10.12345,
        viDo: 20.54321,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ten: 'XYZ Corporation',
        soDienThoai: '0987654321',
        diaChiCoSo: '456 Elm Street',
        kinhDo: 30.98765,
        viDo: 40.87654,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Thêm các bản ghi khác tại đây
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('partner', null, {});
  },
};
