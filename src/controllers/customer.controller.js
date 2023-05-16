const Customer = require('../models/Customer');

class CustomerController {
  // [GET] /customer/show
  async show(req, res) {
    try {
      const users = await Customer.findAll();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  // [GET] /customer/:id
  async getById(req, res) {
    try {
      const { id } = req.params;

      // Tìm người dùng theo id
      const customer = await Customer.findByPk(id);

      if (!customer) {
        return res.status(404).json({ message: 'Customer not found' });
      }

      return res.status(200).json(customer);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  // [POST] /customer/create
  async create(req, res) {
    try {
      const { tenNguoiDung, matKhau, email, soDienThoai, diaChi } = req.body;

      // Tạo người dùng mới trong bảng nguoidung
      const newUser = await Customer.create({
        tenNguoiDung,
        matKhau,
        email,
        soDienThoai,
        diaChi,
      });

      res.status(201).json(newUser); // Trả về người dùng mới tạo thành công
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}

module.exports = new CustomerController();
