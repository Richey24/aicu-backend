const User = require('../model/User')

const getOne = async (req, res) => {
    let { id } = req.body
    let user = await User.findById(id)
    let {password, ...mainUser} = user._doc
    res.status(200).json(mainUser)
}

module.exports = getOne