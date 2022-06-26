const Url = require("../model/Url");

const redirectController = async (req, res) => {
  const url = await Url.findOne({ urlCode: req.params.code });
  if (url) {
    return res.redirect(url.longUrl);
  } else {
    res.status(404).json({ message: "No Url Found" });
  }
};

module.exports = redirectController;
