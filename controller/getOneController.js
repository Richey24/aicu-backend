const User = require('../model/User')

const getOne = async (req, res) => {
    let { id } = req.body
    let user = await User.findById(id)
    res.status(200).json(user)
}

module.exports = getOne