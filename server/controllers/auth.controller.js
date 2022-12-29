// controllers/authController.js
const User = require("../models/User");
const jwt = require("jsonwebtoken");
class AuthController {
  static createToken(user) {
    return jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET_AUTH,
      {
        expiresIn: "24h",
      }
    );
  }
  static async createAccount(req, res) {
    const trx = await User.startTransaction();

    try {
      // Validate the user's information
      const {
        firstName,
        lastName,
        mobileNumber,
        email,
        password,
        confirmPassword,
        accountType,
      } = req.body;
      if (
        !firstName ||
        !lastName ||
        !mobileNumber ||
        !email ||
        !password ||
        !confirmPassword ||
        !accountType
      ) {
        throw new Error("Missing required fields");
      }
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }
      // Save the user to the database
      const payload = {
        firstName,
        lastName,
        mobileNumber,
        email,
        password,
        accountType,
      };
      //objection save
      const user = await User.query(trx).insertGraph(payload);

      const token = AuthController.createToken(user);
      trx.commit();
      res.json({ token });
    } catch (error) {
      await trx.rollback();
      res.status(500).json({ error: error.message });
    }
  }

  static async loginAccount(req, res) {
    try {
      // Validate the user's credentials
      const { email, password } = req.body;
      if (!email || !password) {
        throw new Error("Missing email or password");
      }
      const user = await User.findByEmail(email);

      if (user && (await user.validatePassword(password))) {
        const token = AuthController.createToken(user);
        res.json({ token });
      } else {
        // The email or password is incorrect, do not allow the user to log in.
        throw new Error("Invalid email or password");
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = AuthController;
