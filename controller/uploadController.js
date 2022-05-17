
const uploadFile = (req, res) => {
    let image;
    let imagePath;

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    image = req.files.image
    imagePath = __dirname + '/../img/' + image.name

    image.mv(imagePath, (err) => {
        if (err) {
            return res.status(500).send(err)
        }
        res.status(200).json({ message: 'Image Uploaded' })
    })
}

module.exports = uploadFile