const Url = require("../model/Url");
const shortid = require("shortid");

const shortenController = async (req, res) => {
  const { longUrl } = req.body;
  let baseUrl = "http://localhost:5000";
  const urlCode = shortid.generate();
  const url = await Url.find({ longUrl: longUrl });
  if (url.length >= 1) {
    res.status(201).json(url);
  } else {
    const shortUrl = baseUrl + "/" + urlCode;
    let resUrl = await Url.create({
      urlCode,
      shortUrl,
      longUrl,
    });
    res.status(200).json(resUrl);
  }
};

module.exports = shortenController;
