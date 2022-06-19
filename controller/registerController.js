const User = require("../model/User");
const argon2 = require("argon2");

const registerUser = async (req, res) => {
  let { name, password, email, image } = req.body;
  let check = await User.findOne({ email: email });
  if (!check) {
    let date = new Date();
    let mainPassword = await argon2.hash(password);
    let user = await User.create({
      name: name,
      password: mainPassword,
      created_at: date.getTime(),
      email: email,
      image: image,
    });
    let { password, ...mainUser } = user;
    res.status(200).json(mainUser);
  } else {
    res.status(201).json({ message: "Already Registered" });
  }
};

module.exports = registerUser;
