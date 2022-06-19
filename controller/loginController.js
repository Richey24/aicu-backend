const User = require("../model/User");
const argon2 = require("argon2");

const loginUser = async (req, res) => {
  let { email, password } = req.body;
  let user = await User.findOne({ email: email });
  if (!user) {
    res.status(201).json({ message: "No User Found With That Email" });
    return;
  }
  let result = await argon2.verify(user.password, password);
  if (result) {
    let { password, ...mainUser } = user;
    res.status(200).json(mainUser);
  } else {
    res.status(201).json({ message: "Incorrect Password" });
  }
};

module.exports = loginUser;
