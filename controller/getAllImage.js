const fs = require("fs");

const getAllImage = (req, res) => {
  const imagePath = __dirname + "/../img/";
  try {
    const allFiles = fs.readdirSync(imagePath);
    res.status(200).json(allFiles);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = getAllImage;
