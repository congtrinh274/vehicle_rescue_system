'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('request', [
      {
        idNguoiDung: 1,
        thongTinXe: 'Xe A',
        kinhDo: 10.123456,
        viDo: 20.654321,
        moTa: 'Yêu cầu 1',
        trangThai: 'Chờ xử lý',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idNguoiDung: 2,
        thongTinXe: 'Xe B',
        kinhDo: 30.987654,
        viDo: 40.123456,
        moTa: 'Yêu cầu 2',
        trangThai: 'Đã nhận yêu cầu',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Thêm các dữ liệu yêu cầu khác tại đây (nếu cần)
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('request', null, {});
  }
};
