'use strict'

const dbConn = require('../../config/db.config')

//
const Customer = function(customer) {
    this.idNguoiDung = customer.idNguoiDung;
    this.tenNguoiDung = customer.tenNguoiDung;
    this.matKhau = customer.matKhau;
    this.email = customer.email;
    this.soDienThoai = customer.soDienThoai;
    this.diaChi = customer.diaChi;
    this.anhDaiDien = customer.anhDaiDien;
    this.thoiDiemTaoTK = new Date();
}

Customer.getAll = function (result) {
    dbConn.query("Select * from NguoiDung", function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(null, err);
        }
        else{
          console.log('customers : ', res);
          result(null, res);
        }
    });
};
module.exports = Customer;