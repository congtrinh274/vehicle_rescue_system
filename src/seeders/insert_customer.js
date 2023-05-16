// seeders/20230517123456-create-customers.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('customer', [
      {
        tenNguoiDung: 'John Doe',
        matKhau: '123456',
        email: 'johndoe@example.com',
        soDienThoai: '1234567890',
        diaChi: '123 Main Street',
        anhDaiDien: 'avatar.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tenNguoiDung: 'Jane Smith',
        matKhau: 'abcdef',
        email: 'janesmith@example.com',
        soDienThoai: '0987654321',
        diaChi: '456 Elm Street',
        anhDaiDien: 'profile.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Thêm các bản ghi khác tại đây
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('customer', null, {});
  },
};
