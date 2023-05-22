const Request = require("../models/Request");

class RequestController {
  // [POST] /request/create
  async create(req, res) {
    try {
      const { idNguoiDung, thongTinXe, kinhDo, viDo, moTa } = req.body;

      // Tạo đối tác mới trong bảng doitac
      const newRequest = await Request.create({
        idNguoiDung,
        thongTinXe,
        kinhDo,
        viDo,
        moTa,
      });

      res.status(201).json(newRequest); // Trả về Yêu cầu mới tạo thành công
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  // [POST] /request/update
  async update(req, res) {
    try {
        const { id } = req.params;
      const { thongTinXe, moTa, trangThai } = req.body;

      // Tìm Request theo id
      const request = await Request.findByPk(id);

      if (!request) {
        return res.status(404).json({ message: 'Request isn\'t found' });
      }

      if (trangThai) {
        request.trangThai = trangThai;
      }
      if (moTa) {
        request.moTa = moTa;
      }
      if (thongTinXe) {
        request.thongTinXe = thongTinXe;
      }
  
      // Lưu các thay đổi vào cơ sở dữ liệu
      await request.save();

      return res.status(200).json({ message: 'Cập nhật yêu cầu thành công.' });
    } catch (error) {
        console.error('Lỗi khi cập nhật yêu cầu:', error);
        return res.status(500).json({ error: 'Đã xảy ra lỗi khi cập nhật yêu cầu.' });
    }
  }
}

module.exports = new RequestController();
