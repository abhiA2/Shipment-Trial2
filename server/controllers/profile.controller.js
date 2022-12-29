// controllers/authController.js
const User = require("../models/User");

class AuthController {
  static async updateAddress(req, res) {
    try {
      const addresses = await User.updateAddress({
        ...req.body,
        userId: req.user.id,
      });

      res.json({ message: addresses });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  static async getAddresses(req, res) {
    try {
      //return only the addresses
      const user = await User.query()
        .findById(req.user.id)
        .withGraphFetched("billingAddress")
        .withGraphFetched("pickupAddress")
        .select("id");
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = AuthController;
