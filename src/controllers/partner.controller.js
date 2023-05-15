const Partner = require("../models/Partner");

class PartnerController {
  // [GET] /partner/show
  async show(req, res) {
    try {
      const users = await Partner.findAll();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  // [GET] /partner/:id
  async getById(req, res) {
    try {
      const { id } = req.params;
  
      // Tìm đối tác theo id
      const partner = await Partner.findByPk(id);
  
      if (!partner) {
        return res.status(404).json({ message: 'Partner isn\'t found' });
      }
  
      return res.status(200).json(partner);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  // [POST] /partner/create
  async create(req, res) {
    try {
      const { ten, soDienThoai, diaChiCoSo, kinhDo, viDo } = req.body;

      // Tạo đối tác mới trong bảng doitac
      const newPartner = await Partner.create({
        ten,
        soDienThoai,
        diaChiCoSo,
        kinhDo,
        viDo,
      });

      res.status(201).json(newPartner); // Trả về đối tác mới tạo thành công
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

module.exports = new PartnerController();
