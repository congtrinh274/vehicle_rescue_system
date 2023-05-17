'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('rescue', [
      {
        idCuuHo: 1,
        idYeuCau: 1,
        idDoiTac: 1,
        trangThai: 'Đang đến hiện trường',
        danhGiaTuKH: '',
      },
      {
        idCuuHo: 2,
        idYeuCau: 2,
        idDoiTac: 2,
        trangThai: 'Đã hoàn thành',
        danhGiaTuKH: 'Dịch vụ tốt',
      },
      // Thêm các bản ghi khác tại đây (nếu cần)
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('rescue', null, {});
  }
};
