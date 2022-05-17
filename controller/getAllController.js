const User = require('../model/User')

const getAll = async (req, res) => {
    let user = await User.find({})
    res.status(200).json(user)
}

module.exports = getAll