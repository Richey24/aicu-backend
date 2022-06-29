const fs = require("fs");

const deleteImage = (async = (req, res) => {
  const { imageName } = req.body;

  const imagePath = __dirname + "/../img/" + imageName;
  if (!fs.existsSync(imagePath)) {
    res.status(404).json({ message: "image not found" });
    return;
  }
  try {
    fs.unlinkSync(imagePath);
    res.status(200).json({ message: "image deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).status({ message: error });
  }
});

module.exports = deleteImage;
