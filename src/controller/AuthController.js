// src/controllers/AuthController
// Tạo ra API /login của user để lấy được token sau khi đăng nhập xong

const jwt = require('jsonwebtoken');
const User = require('../models/user')

class AuthController {
  login = async (req, res, next) => {
    try {
      // xứ lý login:
      // check username and password in database
      // nếu tồn tại user -> tạo ra token
      // nếu không tồn tại user -> trả về lỗi user not found
      // if true => create jwt token
      console.log('Function login');
      const { username } = req.body;

      // Kiểm tra xem người dùng có tồn tại trong cơ sở dữ liệu không
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Người dùng tồn tại, tạo token
      const token = jwt.sign({ username }, process.env.SECRET_KEY_JWT);

      res.status(200).json({
        token: token
      })

    } catch (error) {
      next(error)
    }
  }
}

module.exports = new AuthController();
